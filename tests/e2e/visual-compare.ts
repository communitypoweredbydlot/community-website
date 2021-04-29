import { Page } from 'playwright'

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
