import { test, expect } from '@playwright/test'

test.describe('footer navigation', () => {
  test.use({ locale: 'ro_RO' })

  test('should navigate to the correct pages in RO', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('should navigate to the correct pages in EN', async ({ page }) => {
    await page.goto('http://localhost:3000/en/')
    // there is an initial redirect going on depending on the locale of the browser
    expect(page.url()).toBe('http://localhost:3000/')

    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/en/')
  })
})
