import type { useTranslations } from "next-intl"
import type { getTranslations } from "next-intl/server"

import type { routing } from "./routing"

type TranslationKeys = never
export type ServerSideT<S extends TranslationKeys = never> = Awaited<
  ReturnType<typeof getTranslations<S>>
>
export type ClientSideT<S extends TranslationKeys = never> = ReturnType<typeof useTranslations<S>>
export type IsomorficT<S extends TranslationKeys = never> = ServerSideT<S> | ClientSideT<S>

export type Locale = (typeof routing.locales)[number]
