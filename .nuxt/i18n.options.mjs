
// @ts-nocheck


export const localeCodes =  [
  "it",
  "en"
]

export const localeLoaders = {
  "it": [{ key: "../lang/it.js", load: () => import("../lang/it.js" /* webpackChunkName: "locale__Users_gdalmaso_projects_airisc_airisc_fe_lang_it_js" */), cache: true }],
  "en": [{ key: "../lang/en.js", load: () => import("../lang/en.js" /* webpackChunkName: "locale__Users_gdalmaso_projects_airisc_airisc_fe_lang_en_js" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": false,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "it",
      "name": "Italiano",
      "language": "it",
      "files": [
        "/Users/gdalmaso/projects/airisc/airisc-fe/lang/it.js"
      ]
    },
    {
      "code": "en",
      "name": "English",
      "language": "en",
      "files": [
        "/Users/gdalmaso/projects/airisc/airisc-fe/lang/en.js"
      ]
    }
  ],
  "defaultLocale": "it",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix",
  "lazy": true,
  "langDir": "./lang",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "config",
  "pages": {
    "job-offers/index": {
      "it": "/trova-lavoro-a-livigno",
      "en": "/find-work-in-livigno"
    },
    "job-offers/[slug]": {
      "it": "/trova-lavoro-a-livigno/[slug]",
      "en": "/find-work-in-livigno/[slug]"
    },
    "living-in-livigno": {
      "it": "/vivere-a-livigno",
      "en": "/living-in-livigno"
    },
    "livigno-card/index": {
      "it": "/livigno-card",
      "en": "/livigno-card"
    },
    "livigno-card/promos-list": {
      "it": "/livigno-card/vantaggi-offerti",
      "en": "/livigno-card/promos-offered"
    },
    "contact-us": {
      "it": "/contattaci",
      "en": "/contact-us"
    }
  },
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "it",
    "name": "Italiano",
    "language": "it",
    "files": [
      {
        "path": "/Users/gdalmaso/projects/airisc/airisc-fe/lang/it.js"
      }
    ]
  },
  {
    "code": "en",
    "name": "English",
    "language": "en",
    "files": [
      {
        "path": "/Users/gdalmaso/projects/airisc/airisc-fe/lang/en.js"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
