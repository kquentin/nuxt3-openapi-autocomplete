// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      api: {
        url: "https://petstore3.swagger.io/api/v3"
      }
    }
  },
})
