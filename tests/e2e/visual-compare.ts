import { Page } from 'playwright'

export const commonContextOptions = {
  viewport: { height: 1260, width: 2560 },
  storageState: {
    cookies: [
      { name: 'cookie-consent', value: '%7B%22analytics%22%3Atrue%7D', domain: 'localhost', path: '/' }
    ]
  }
}

export function visuallyCompareSuiteWith ({ it, expect }, baseUrl, language) {
  const visuallyCompareUrl = visuallyCompareWith(expect)
  const url = language === 'ro' ? baseUrl : `${baseUrl}${language}/`

  const pages = [
    '',
    'ourstory',
    'projects',
    'supportus',
    'termsandconditions',
    'termsandconditions?cookiePreferences',
    'incometax'
  ]

  for (const p of pages) {
    it(`should correctly display ${p} in ${language.toUpperCase()}`, async ({ page, browserName }) => {
      await visuallyCompareUrl(page, `${url}${p}`, language, browserName)
    })
  }
}

export const visuallyCompareWith = expect => async (page: Page, url: string, language: string, browserName: string) => {
  await page.goto(url)
  await page.goto(url)
  // We need to load the lazy-loading images somehow
  // TODO: find a better solution
  await autoScroll(page)
  const screenshot = await page.screenshot({ fullPage: true })
  expect(screenshot).toMatchSnapshot(`test-${browserName}-${await page.title()}-${language}.png`, { threshold: 0.2 })
}

// https://stackoverflow.com/a/53527984
async function autoScroll (page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0
      const distance = 100
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight
        window.scrollBy(0, distance)
        totalHeight += distance

        if (totalHeight >= scrollHeight) {
          clearInterval(timer)
          resolve(undefined)
        }
      }, 100)
    })
  })
}
