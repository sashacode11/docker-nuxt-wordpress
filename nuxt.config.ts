// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase'
  ],
  runtimeConfig: {
    public: {
      wordpressUrl: 'http://localhost:8080/graphql'
    },
  },
});
