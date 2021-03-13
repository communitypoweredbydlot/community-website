import { folio } from '@playwright/test'

const fixtures = folio.extend()

fixtures.contextOptions.override(async ({ contextOptions }, runTest) => {
  await runTest({
    ...Object.assign(contextOptions, { locale: 'ro_RO' })
  })
})
const { it, describe, expect } = fixtures.build()

describe('locale redirect', () => {
  it('should not redirect when dirrectly accessing root', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/')
  })

  it('should first redirect when accessing EN', async ({ page }) => {
    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/')

    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/en/')
  })
})
