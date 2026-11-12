export const languages = { en: "ინგლისური", ru: "რუსული" };
export const levels = { A1: "დამწყები", A2: "საბაზისო" };
export const historyLimit = 6;
export const optionLimit = 180;
export const inputLimit = 600;
export const messageLimit = 800;

export function boundedText(value, limit) {
  return typeof value === "string" && value.length <= limit && value.trim() !== "";
}

export function parseTurn(value, kind) {
  if (!boundedText(value?.message, messageLimit) ||
      !Array.isArray(value.options) || value.options.length !== 3 ||
      !value.options.every((option) => boundedText(option, optionLimit))) {
    return null;
  }

  const options = value.options.map((option) => option.trim());
  if (new Set(options.map((option) => option.toLowerCase())).size !== 3) return null;

  const feedback = value.feedback;
  if ((kind === "choice" || (kind === "text" && feedback != null)) && (
    typeof feedback?.correct !== "boolean" ||
    !boundedText(feedback.text, messageLimit) ||
    !/[\u10d0-\u10ff]/u.test(feedback.text)
  )) return null;

  return {
    message: value.message.trim(),
    options,
    feedback: kind && feedback ? { correct: feedback.correct, text: feedback.text.trim() } : null,
  };
}
