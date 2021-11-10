import { test, expect } from '@playwright/test'

test.describe('locale redirect', () => {
  test.use({ locale: 'en_US' })

  test('should not redirect when dirrectly accessing EN', async ({ page }) => {
    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/en/')
  })

  test.skip('should first redirect when accessing RO', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/en/')

    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/')
  })
})
