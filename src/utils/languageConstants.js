const lang = {
  en: {
    search: "search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोजें",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  spanish: {
    search: "buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
};

export default lang;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
