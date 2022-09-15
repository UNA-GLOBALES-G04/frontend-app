import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: 'es',
});

export const recoilStateDictionary = {
  languageState
};
