import { folio } from '@playwright/test'

const fixtures = folio.extend()

fixtures.contextOptions.override(async ({ contextOptions }, runTest) => {
  await runTest({
    ...Object.assign(contextOptions, { locale: 'en_US' })
  })
})
const { it, describe, expect } = fixtures.build()

describe('locale redirect', () => {
  it('should not redirect when dirrectly accessing EN', async ({ page }) => {
    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/en/')
  })

  it('should first redirect when accessing RO', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/en/')

    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/')
  })
})
