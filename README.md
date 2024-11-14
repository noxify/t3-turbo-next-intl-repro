# t3-turbo repro w/ next-intl

> Note: We're using `pnpm@9.12.3` and `node@22.10.0` ( via nvm )

1. clone the repo
2. run `pnpm i`
3. Open the project in VSCode
   4.a. Run `pnpm typecheck`
   4.b. Alternatively, open the file `apps/frontend/src/components/client-component.tsx`

The result from `pnpm typecheck` is something like this:

```
│ src/components/client-component.tsx:10:13 - error TS2345: Argument of type 'string' is not assigna
│ ble to parameter of type 'never'.
│
│ 10       <p>{t("client_text")}</p>
│                ~~~~~~~~~~~~~
```

VSC shows the following/same error:

```
Argument of type 'string' is not assignable to parameter of type 'never'.ts(2345)
⚠ Error (TS2345)  |
Argument of type
 is not assignable to parameter of type
 .
```
