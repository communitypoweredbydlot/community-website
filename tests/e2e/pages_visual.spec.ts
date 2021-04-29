import { folio } from '@playwright/test'
import { visuallyCompareWith } from './visual-compare'

const fixtures = folio.extend()

fixtures.contextOptions.override(async ({ contextOptions }, runTest) => {
  await runTest({
    ...Object.assign(contextOptions, {
      locale: 'ro_RO',
      viewport: { height: 1260, width: 2560 },
      storageState: {
        cookies: [
          { name: 'cookie-consent', value: '%7B%22analytics%22%3Atrue%7D', domain: 'localhost', path: '/' }
        ]
      }
    })
  })
})
const { it, describe, expect } = fixtures.build()

const visuallyCompareUrl = visuallyCompareWith(expect)

describe('pages visual comparison', () => {
  it('should correctly display Home Page in RO', async ({ page, browserName }) => {
    await visuallyCompareUrl(page, 'http://localhost:3000/', 'ro', browserName)
  })

  it('should correctly display Our Story in RO', async ({ page, browserName }) => {
    await visuallyCompareUrl(page, 'http://localhost:3000/ourstory', 'ro', browserName)
  })

  it('should correctly display Projects in RO', async ({ page, browserName }) => {
    await visuallyCompareUrl(page, 'http://localhost:3000/projects', 'ro', browserName)
  })

  it('should correctly display Support us in RO', async ({ page, browserName }) => {
    await visuallyCompareUrl(page, 'http://localhost:3000/supportus', 'ro', browserName)
  })

  it('should correctly display Privacy Policy in RO', async ({ page, browserName }) => {
    await visuallyCompareUrl(page, 'http://localhost:3000/privacypolicy', 'ro', browserName)
  })

  it('should correctly display Terms And Conditions in RO', async ({ page, browserName }) => {
    await visuallyCompareUrl(page, 'http://localhost:3000/termsandconditions', 'ro', browserName)
  })

  it('should correctly display Cookie Preferences in RO', async ({ page, browserName }) => {
    await visuallyCompareUrl(page, 'https://www.asociatiacommunity.ro/termsandconditions?cookiePreferences', 'ro', browserName)
  })
})
