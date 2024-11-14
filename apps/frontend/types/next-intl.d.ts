// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type Messages = typeof import("@acme/locales/lang/en.json")

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface IntlMessages extends Messages {}
}
