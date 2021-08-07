import { test, expect } from '@playwright/test'

test.describe('locale redirect', () => {
  test.use({ locale: 'ro_RO' })

  test('should not redirect when dirrectly accessing root', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/')
  })

  test('should first redirect when accessing EN', async ({ page }) => {
    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/')

    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/en/')
  })
})
