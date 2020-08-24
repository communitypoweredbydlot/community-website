
const fetchWithDefault = (mdFilename: string) => async (context: any) => {
  const { $content, app } = context
  const page = await $content(`${app.i18n.locale}/${mdFilename}`)
    .fetch()
    .catch((_err: any) => {
      return $content(`${app.i18n.defaultLocale}/${mdFilename}`).fetch()
    })
  return {
    page
  }
}

export default fetchWithDefault
