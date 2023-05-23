

export type Locale = "en" | "es";

export type Lang = {
  name: string;
  locale: Locale;
};

export const i18n = {
  defaultLanguage: { name: "English", locale: "en" } as Lang,
  languages: [
    { name: "English", locale: "en" },
    { name: "Español", locale: "es" },
  ] as Lang[],
} as const;
