import * as messages from "../../i18n";

export const getMessages = (lang) => {
  const result = messages[lang];
  return result ? result : messages["fr"];
};
