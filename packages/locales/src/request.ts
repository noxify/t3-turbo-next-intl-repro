import { getRequestConfig } from "next-intl/server"

import type { Locale } from "."
import de from "./lang/de.json" with { type: "json" }
import en from "./lang/en.json" with { type: "json" }
import { routing } from "./routing"

export const locales = [de, en]

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }

  return {
    locale,

    // since we only have german and english as languages,
    // we can use a static import
    messages: locale === "de" ? de : en,

    // supress all kind of error messages ;)
    onError: () => {
      return
    },
    // show the translation key as fallback if we can't find a translation for the given key
    // if there is a namespace, we will add them to the fallback, too.
    getMessageFallback: ({ namespace, key }) => (namespace ? `${namespace}.${key}` : `${key}`),
  }
})
