import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
    },
  },

  env: {
    apiBaseUrl: process.env.API_BASE_URL,
  },

  app: {
    head: {
      title: "BG Leaderboard",

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "BG LEADERBOARD",
          content: "BG LEADERBOARD",
        },
      ],

      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "https://res.cloudinary.com/dgdteyucq/image/upload/v1709809132/bible-game/Spirit_Game_Logo_zdpn4n.png",
        },

        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/mikado",
        },
      ],
    },
  },

  css: ["~/assets/styles/index.scss"],

  // modules: [
  //   [
  //     "@pinia/nuxt",

  //     {
  //       autoImports: ["defineStore", "acceptHMRUpdate"],
  //     },
  //   ],
  //   "pinia",
  // ],

  modules: ["@pinia/nuxt"],

  compatibilityDate: "2024-12-14",
});
