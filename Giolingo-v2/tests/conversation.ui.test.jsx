import React from 'react';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import ConversationPractice from '../src/components/ConversationPractice';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

test('keeps the selected answer retryable and shows Georgian feedback with three new choices', async () => {
  const first = {
    message: 'Здравствуйте! Что вы хотите заказать?',
    options: ['Я хочу суп.', 'Мы живём рядом.', 'Сейчас восемь.'],
  };
  const second = {
    message: 'Будете пить чай или кофе?',
    options: ['Я буду чай.', 'Мне два года.', 'Это моя книга.'],
    feedback: { correct: true, text: 'ეს პასუხი შეკითხვას შეესაბამება.' },
  };
  const fetchTurn = vi.fn()
    .mockResolvedValueOnce(Response.json(first))
    .mockResolvedValueOnce(Response.json({ error: 'უფასო ლიმიტი ამოიწურა.' }, { status: 429 }))
    .mockResolvedValueOnce(Response.json(second));
  vi.stubGlobal('fetch', fetchTurn);

  render(<ConversationPractice initialLanguage="ru" initialLevel="A2" />);
  fireEvent.click(screen.getByRole('button', { name: 'დიალოგის დაწყება' }));
  await screen.findByText(first.message);
  expect(JSON.parse(fetchTurn.mock.calls[0][1].body)).toEqual({ language: 'ru', level: 'A2', history: [] });
  const options = within(screen.getByRole('group', { name: 'აირჩიე პასუხი' }));
  expect(options.getAllByRole('button')).toHaveLength(3);

  fireEvent.click(options.getByRole('button', { name: first.options[0] }));
  expect((await screen.findByRole('alert')).textContent).toContain('უფასო ლიმიტი');
  fireEvent.click(options.getByRole('button', { name: first.options[0] }));
  await screen.findByText(second.feedback.text);

  expect(JSON.parse(fetchTurn.mock.calls[2][1].body).history).toEqual([
    { message: first.message, answer: first.options[0] },
  ]);
  expect(screen.getByText(second.message)).toBeTruthy();
  expect(options.getAllByRole('button').map((button) => button.querySelector('[lang="ru"]').textContent))
    .toEqual(second.options);
});
