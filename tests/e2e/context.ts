import { folio } from '@playwright/test'

export const buildContextWithOptions = (specificOptions?) => {
  const fixtures = folio.extend()
  fixtures.contextOptions.override(async ({ contextOptions }, runTest) => {
    await runTest({
      ...Object.assign(contextOptions, specificOptions)
    })
  })

  return fixtures.build()
}
