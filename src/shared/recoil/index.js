import { atom } from "recoil";

export const languageState = atom({
  key: "languageState",
  default: 'es',
});

export const userState = atom({
  key: "userState",
  default: {key: 'value'},
});

export const recoilStateDictionary = {
  languageState,
  userState
};
