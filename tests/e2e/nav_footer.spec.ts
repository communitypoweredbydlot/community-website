import { folio } from '@playwright/test'

const fixtures = folio.extend()

fixtures.contextOptions.override(async ({ contextOptions }, runTest) => {
  await runTest({
    ...Object.assign(contextOptions, { locale: 'ro_RO' })
  })
})
const { it, describe, expect } = fixtures.build()

describe('footer navigation', () => {
  it('should navigate to the correct pages in RO', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/')
  })

  it('should navigate to the correct pages in EN', async ({ page }) => {
    await page.goto('http://localhost:3000/en/')
    // there is an initial redirect going on depending on the locale of the browser
    expect(page.url()).toBe('http://localhost:3000/')

    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/en/')
  })
})
