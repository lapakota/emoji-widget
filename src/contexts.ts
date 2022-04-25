import { EmojiScheme, StatesKeys } from "./utils/enums";
import React from "react";

type ThemeContextType = { isLightTheme: boolean; dispatchChangeTheme: (value: boolean) => void };
type SchemeContextType = { emojiScheme: EmojiScheme; dispatchChangeEmojiScheme: (value: EmojiScheme) => void };

export const CurrentThemeContext = React.createContext<ThemeContextType>({
  [StatesKeys.IsLightTheme]: true,
  dispatchChangeTheme: () => {}
});

export const CurrentEmojiSchemeContext = React.createContext<SchemeContextType>({
  [StatesKeys.EmojiScheme]: EmojiScheme.Apple,
  dispatchChangeEmojiScheme: () => {}
});