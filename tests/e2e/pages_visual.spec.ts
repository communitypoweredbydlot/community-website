import { visuallyCompareWith, commonContextOptions } from './visual-compare'
import { buildContextWithOptions } from './context'

const visuallyCompareSuiteWithContext = ({ describe, it, expect }, language: string) => {
  describe(`pages visual comparison ${language.toUpperCase()}`, () => {
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
      const baseUrl = 'http://localhost:3000/'
      const url = language === 'ro' ? baseUrl : `${baseUrl}${language}/`
      const visuallyCompareUrl = visuallyCompareWith(expect)
      it(`should correctly display ${p} in ${language.toUpperCase()}`, async ({ page, browserName }) => {
        await visuallyCompareUrl(page, `${url}${p}`, language, browserName)
      })
    }
  })
}

const buildCommonContextWithOptions = (specificOptions?: any) =>
  buildContextWithOptions(specificOptions ? Object.assign(commonContextOptions, specificOptions) : commonContextOptions)

Object.entries({
  en: buildCommonContextWithOptions(),
  ro: buildCommonContextWithOptions({ locale: 'ro_RO' })
}).forEach(([language, context]) => visuallyCompareSuiteWithContext(context, language))
