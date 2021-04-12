const BLOG = {
  title: 'Shyrism',
  author: 'Shyrz',
  email: 'i@shyrz.ch',
  link: 'https://ism.shyrz.ch',
  description: 'Something beautiful, something meaningful.',
  lang: 'en-US',
  appearance: 'light', // ['light', 'dark', 'auto'],
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#111827', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2020, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/shyrz__',
  seo: {
    keywords: ['Blog', 'Column', 'Newsletter', 'RSS', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-WY1QM2HEQE' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
    provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'blog-comment', // The repository of store comments
      owner: 'shyrz',
      admin: [],
      clientID: '48ae35124221bfc15241',
      clientSecret: 'cda98da2046830ad6ead12c3624e061ed2c0b8d3',
      distractionFreeMode: false
    }
  }
}
// export default BLOG
module.exports = BLOG
