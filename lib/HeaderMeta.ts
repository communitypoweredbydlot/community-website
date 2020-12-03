
const ogMetaFor = ({ route, img, title }) => {
  const baseUrl = 'https://asociatiacommunity.ro'
  const imagePath = `${baseUrl}${img}`
  const properTitle = title.charAt(0).toUpperCase() + title.slice(1)
  return {
    meta: [
      { hid: 'og:title', property: 'og:title', content: properTitle },
      { hid: 'og:url', property: 'og:url', content: `${baseUrl}${route}/` },
      { hid: 'og:image', property: 'og:image', content: imagePath },
      { hid: 'og:image:alt', property: 'og:image:alt', content: properTitle },
      { hid: 'twitter:image', name: 'twitter:image', content: imagePath },
      { hid: 'twitter:title', name: 'twitter:title', content: properTitle }
    ]
  }
}

export default ogMetaFor
