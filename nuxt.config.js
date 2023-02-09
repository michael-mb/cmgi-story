export default defineNuxtConfig({
  modules: [
      ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_ACCESS_TOKEN}]
  ],
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/images/logo/fav.png' },
                { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
                { rel: 'stylesheet', href: '/css/font-awesome.min.css' },
                { rel: 'stylesheet', href: '/css/simple-line-icons.min.css' },
                { rel: 'stylesheet', href: '/css/themify-icons.css' },
                { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
                { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
                { rel: 'stylesheet', href: '/css/magnific-popup.css' },
                { rel: 'stylesheet', href: '/rs-plugin/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css' },
                { rel: 'stylesheet', href: '/rs-plugin/css/settings.css' },
                { rel: 'stylesheet', href: '/rs-plugin/css/main-slider/rs6.css' },
                { rel: 'stylesheet', href: '/css/color-schemes/blue.css' },
                { rel: 'stylesheet', href: '/css/style.css' , class: 'main-style'}
            ],
            script: [
                {type: 'text/javascript', src: '/js/jquery.min.js'},
                {type: 'text/javascript', src: '/js/jquery.easing.min.js'},
                {type: 'text/javascript', src: '/js/owl.carousel.min.js'},
                {type: 'text/javascript', src: '/js/jquery.paroller.min.js'},
                {type: 'text/javascript', src: '/js/isotope.pkgd.min.js'},
                {type: 'text/javascript', src: '/js/jquery.magnific-popup.min.js'},
                {type: 'text/javascript', src: '/js/validator.min.js'},
                {type: 'text/javascript', src: '/js/smartresize.min.js'},
                {type: 'text/javascript', src: '/js/jquery.appear.min.js'},
                {type: 'text/javascript', src: '/js/jquery.countdown.min.js'},
                {type: 'text/javascript', src: '/js/jquery.circle.progress.min.js'},
                {type: 'text/javascript', src: '/rs-plugin/js/jquery.themepunch.tools.min.js'},
                {type: 'text/javascript', src: '/rs-plugin/js/jquery.themepunch.revolution.min.js'},
                {type: 'text/javascript', src: '/rs-plugin/js/main-slider/rbtools.min.js'},
                {type: 'text/javascript', src: '/rs-plugin/js/main-slider/rs6.min.js'},
                {type: 'text/javascript', src: '/rs-plugin/js/main-slider/home-1.js'},
                {type: 'text/javascript', src: '/js/custom.js'}
            ]
        }
    }
})
