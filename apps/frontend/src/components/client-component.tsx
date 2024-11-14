"use client"

import { useTranslations } from "next-intl"

export function ClientComponent() {
  const t = useTranslations()
  return (
    <div>
      <h2>Client Component</h2>
      <p>{t("client_text")}</p>
    </div>
  )
}
