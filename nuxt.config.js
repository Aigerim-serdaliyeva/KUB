export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~plugins/axios.client.js' },
        { src: '~plugins/object-fit-images.client.js' },
        { src: '~plugins/vue-notification.client.js' },
        { src: '~/plugins/validate.js' },
        { src: '~plugins/vue-scrollmagic.client.js', mode: 'client' },
        { src: '~/plugins/wow.client.js', mode: 'client' },
        { src: '~/plugins/anime.js', mode: 'client' }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        configPath: '~/tailwind/tailwind.config.js',
        cssPath: '~/assets/css/tailwind.css'
    },
    /*
     ** Nuxt.js modules
     */

    /*
     ** Build configuration
     */
    build: {
        transpile: ['vee-validate/dist/rules'],
        /*
         ** You can extend webpack config here
         */
        postcss: {
            plugins: {
                'postcss-import': {},
                autoprefixer: {},
                'postcss-preset-env': {
                    stage: 1
                }
            }
        }
    },
    env: {
        dev: process.env.NODE_ENV === 'development'
    },
    purgeCSS: {},
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    fix: true
                }
            }
        ]
    },
    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition;
            }

            const findEl = async (hash, x) => {
                return (
                    document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve();
                        }
                        setTimeout(() => {
                            resolve(findEl(hash, ++x || 1));
                        }, 100);
                    })
                );
            };

            if (to.hash) {
                const el = await findEl(to.hash);
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({
                        top: el.offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    return window.scrollTo(0, el.offsetTop);
                }
            }

            return window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
};
