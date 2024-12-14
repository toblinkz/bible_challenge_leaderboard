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
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/styles/index.scss", "~/assets/fonts/satoshi/satoshi.css"],
  compatibilityDate: "2024-12-14",
});
