import { createContext } from "react";
import { defaultLanguage } from "../constants";

const LanguageContext = createContext({
  lang: defaultLanguage,
  setLang: () => {},
});

export default LanguageContext;
