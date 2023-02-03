export default defineNuxtConfig({
  modules: [
      ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_ACCESS_TOKEN}]
  ]
})
