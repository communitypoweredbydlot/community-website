import { test, expect } from '@playwright/test'

test.describe('main navigation', () => {
  test.use({ locale: 'ro_RO' })

  test('should navigate to the correct pages in RO', async ({ page }) => {
    await page.goto('http://localhost:3000/')
    expect(page.url()).toBe('http://localhost:3000/')

    await page.click('nav >> text=Misiunea')
    expect(page.url()).toBe('http://localhost:3000/')
    await page.waitForSelector('//*[@id="__layout"]/div/div[2] >> text=Asociația Community powered by DLOT este o organizație non-profit focusată pe protecția naturii')

    await page.click('nav >> text=Povestea')
    expect(page.url()).toBe('http://localhost:3000/ourstory')
    await page.waitForSelector('h3 >> text=Povestea')

    await page.click('nav >> text=Proiecte')
    expect(page.url()).toBe('http://localhost:3000/projects')
    await page.waitForSelector('h3 >> text=Proiecte')

    await page.click('nav >> text=Implică-te')
    expect(page.url()).toBe('http://localhost:3000/supportus')
    await page.waitForSelector('h3 >> text=Implică-te')
  })

  test('should navigate to the correct pages in EN', async ({ page }) => {
    await page.goto('http://localhost:3000/en/')
    // there is an initial redirect going on depending on the locale of the browser
    expect(page.url()).toBe('http://localhost:3000/')

    await page.goto('http://localhost:3000/en/')
    expect(page.url()).toBe('http://localhost:3000/en/')

    await page.click('nav >> text=Mission statement')
    expect(page.url()).toBe('http://localhost:3000/en/')
    await page.waitForSelector('//*[@id="__layout"]/div/div[2] >> text=Asociația Community powered by DLOT is a non-profit organization focused on environmental protection')

    await page.click('nav >> text=Our story')
    expect(page.url()).toBe('http://localhost:3000/en/ourstory')
    await page.waitForSelector('h3 >> text=Our story')

    await page.click('nav >> text=Projects')
    expect(page.url()).toBe('http://localhost:3000/en/projects')
    await page.waitForSelector('h3 >> text=Our projects')

    await page.click('nav >> text=Support us')
    expect(page.url()).toBe('http://localhost:3000/en/supportus')
    await page.waitForSelector('h3 >> text=Call for Supporters')
  })
})
