import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { getLocale, getMessages, getNow, getTimeZone } from "next-intl/server"

import type { Locale } from "@acme/locales"
import { routing } from "@acme/locales/routing"

import LocaleProvider from "~/components/locale-provider"

export interface LocaleLayoutProps {
  children: ReactNode
  params: {
    locale: string
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  if (!routing.locales.includes(params.locale as Locale)) {
    notFound()
  }

  const locale = await getLocale()
  const now = await getNow()
  const timeZone = await getTimeZone()
  const messages = await getMessages()
  return (
    <LocaleProvider messages={messages} locale={locale} now={now} timeZone={timeZone}>
      {children}
    </LocaleProvider>
  )
}
