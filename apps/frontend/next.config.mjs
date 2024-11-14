import { fileURLToPath } from "url"
import { createJiti } from "jiti"
import createNextIntlPlugin from "next-intl/plugin"

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
await createJiti(fileURLToPath(import.meta.url)).import("./src/env")

/** @type {import("next").NextConfig} */
const config = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  cleanDistDir: true,
  experimental: {
    // without this, we get the following error: https://github.com/jaredwray/keyv/issues/1031
    // this is related to the used versions inside `got`
    serverComponentsExternalPackages: ["got"],
  },

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@acme/locales"],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

const withNextIntl = createNextIntlPlugin("../../packages/locales/src/request.ts")

export default withNextIntl(config)
