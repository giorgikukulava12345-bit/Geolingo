import React from 'react';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import ConversationPractice from '../src/components/ConversationPractice';
import { handleConversation } from '../src/lib/conversation/handler.js';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

test('starts with a typed Georgian question and lets the learner change topics without grading questions', async () => {
  vi.stubEnv('GEMINI_API_KEY', 'test-key');
  const first = {
    message: 'Mars is a planet. It looks red. What would you like to know?',
    options: ['Why is it red?', 'Is it cold there?', 'How far away is Mars?'],
    feedback: null,
  };
  const second = {
    message: 'You can buy a train ticket at the station or online. Where do you want to go?',
    options: ['I want to go to Batumi.', 'How much is a ticket?', 'Can I buy it here?'],
    feedback: null,
  };
  const received = [];
  vi.stubGlobal('fetch', async (url, init) => {
    if (url === '/api/conversation') {
      return handleConversation(new Request('https://example.com' + url, init));
    }
    const body = JSON.parse(init.body);
    received.push(JSON.parse(body.contents[0].parts[0].text).history);
    const result = received.length === 1 ? first : second;
    return Response.json({ candidates: [{ finishReason: 'STOP', content: { parts: [{ text: JSON.stringify(result) }] } }] });
  });

  render(<ConversationPractice initialLanguage="en" initialLevel="A1" />);
  const composer = screen.getByRole('textbox', { name: 'შენი შეტყობინება' });
  const question = 'რას მეტყვი მარსზე?';
  fireEvent.change(composer, { target: { value: '  ' + question + '  ' } });
  fireEvent.keyDown(composer, { key: 'Enter', shiftKey: true });
  expect(received).toHaveLength(0);
  fireEvent.keyDown(composer, { key: 'Enter' });
  await screen.findByText(first.message);
  expect(received[0]).toEqual([{ message: '', answer: question, kind: 'text' }]);
  expect(screen.getByText(question).lang).toBe('ka');
  expect(composer.value).toBe('');

  const newTopic = 'How can I buy a train ticket?';
  fireEvent.change(composer, { target: { value: newTopic } });
  fireEvent.click(screen.getByRole('button', { name: 'გაგზავნა' }));
  await screen.findByText(second.message);
  expect(received[1]).toEqual([
    { message: '', answer: question, kind: 'text' },
    { message: first.message, answer: newTopic, kind: 'text' },
  ]);
  expect(screen.queryByText('კარგი პასუხია')).toBeNull();
  expect(screen.queryByText('უკეთესი პასუხი')).toBeNull();
  expect(within(screen.getByRole('group', { name: 'აირჩიე პასუხი' })).getAllByRole('button')).toHaveLength(3);
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
