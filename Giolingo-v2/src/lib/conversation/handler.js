import { ConversationError, generateTurn } from "./gemini.js";
import {
  boundedText, historyLimit, languages, levels, messageLimit, optionLimit,
} from "./shared.js";

const bodyLimit = 16 * 1024;

function reply(body, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

async function readInput(request) {
  if (Number(request.headers.get("content-length")) > bodyLimit) return null;
  const reader = request.body?.getReader();
  if (!reader) return null;

  const decoder = new TextDecoder("utf-8", { fatal: true });
  let size = 0;
  let text = "";
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > bodyLimit) {
        await reader.cancel();
        return null;
      }
      text += decoder.decode(value, { stream: true });
    }
    return JSON.parse(text + decoder.decode());
  } catch {
    return null;
  } finally {
    reader.releaseLock();
  }
}

export async function handleConversation(request) {
  if (request.method !== "POST") {
    return new Response(null, { status: 405, headers: { Allow: "POST" } });
  }
  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return reply({ error: "მოთხოვნა უარყოფილია." }, 403);
  }
  const contentType = request.headers.get("content-type")?.split(";")[0].trim();
  if (contentType !== "application/json") {
    return reply({ error: "მოთხოვნის ფორმატი არასწორია." }, 415);
  }

  const { language, level, history } = (await readInput(request)) ?? {};
  if (typeof language !== "string" || !Object.hasOwn(languages, language) ||
      typeof level !== "string" || !Object.hasOwn(levels, level) ||
      !Array.isArray(history) || history.length > historyLimit ||
      !history.every((entry) => boundedText(entry?.message, messageLimit) &&
        boundedText(entry?.answer, optionLimit))) {
    return reply({ error: "ენის, დონის ან დიალოგის მონაცემები არასწორია." }, 400);
  }

  try {
    const turns = history.map(({ message, answer }) => ({ message, answer }));
    return reply(await generateTurn({ language, level, history: turns }, request.signal));
  } catch (error) {
    if (error instanceof ConversationError) return reply({ error: error.message }, error.status);
    console.error("Conversation route failed");
    return reply({ error: "მოხდა შეცდომა. სცადე ხელახლა." }, 500);
  }
}
