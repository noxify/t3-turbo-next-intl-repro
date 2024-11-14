import { getTranslations } from "next-intl/server"

export default async function DashboardPage() {
  const t = await getTranslations()

  return (
    <>
      <h1>Rendered translation from server</h1>
      {t("server_text")}
    </>
  )
}
