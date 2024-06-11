// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [`@nuxtjs/supabase`],
  supabase:{
    redirect:false
  },
  // router: {
  //   base: `/top`,
  // },

  hooks:{
    'pages:extend'(pages){
      pages.push({
        name:'index',
        path:'/',
        file: '~/pages/top/index.vue',
      })
    }
  }
})
