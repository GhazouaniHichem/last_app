/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class', '[data-theme="dark"]'],
    content: [
        './app/**/*.{hbs,js}',
        './addon/**/*.{hbs,js}',
        './node_modules/@fleetbase/ember-ui/addon/**/*.{hbs,js}',
        './node_modules/@fleetbase/ember-ui/addon/templates/*.{hbs,js}',
        './node_modules/@fleetbase/ember-ui/addon/templates/**/*.{hbs,js}',
        './node_modules/@fleetbase/ember-ui/addon/components/*.{hbs,js}',
        './node_modules/@fleetbase/ember-ui/addon/components/**/*.{hbs,js}',
        './node_modules/@fleetbase/ember-core/addon/**/*.{hbs,js}',
        './node_modules/@fleetbase/fleetops-engine/addon/**/*.{hbs,js}',
        './node_modules/@fleetbase/storefront-engine/addon/**/*.{hbs,js}',
        './node_modules/@fleetbase/*-engine/addon/**/*.{hbs,js}',
        './node_modules/**/*-engine/addon/**/*.{hbs,js}',
        '../packages/*-engine/addon/**/*.{hbs,js}',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                span: ['span 1', 'span 2', 'span 3', 'span 4', 'span 5', 'span 6', 'span 7', 'span 8', 'span 9', 'span 10', 'span 11', 'span 12'],
            },
            ringColor: {
                DEFAULT: 'transparent',
            },
            colors: {
                sky: {
                    100: '#e6f0fb',
                    200: '#bad5f5',
                    300: '#8dbbef',
                    400: '#61a0e8',
                    500: '#3485e2',
                    600: '#1c6cc7',
                    700: '#16539a',
                    800: '#103b6d',
                    900: '#092341',
                },
                nightsky: {
                    100: '#0d2f57',
                    200: '#092340',
                    300: '#06172a',
                    400: '#030b14',
                },
                night: {
                    801: '#222C3C',
                    802: '#202A3A',
                    803: '#1D2737',
                    804: '#1B2535',
                    805: '#182232',
                    901: '#131B2B',
                    902: '#111929',
                    903: '#0E1626',
                    904: '#0C1424',
                    905: '#091121',
                },
                midnight: {
                    100: '#555555',
                    200: '#484848',
                    300: '#3b3b3b',
                    400: '#2e2e2e',
                    500: '#222222',
                    600: '#151515',
                    700: '#080808',
                },
                moregray: {
                    750: '#283345',
                    850: '#212a38',
                },
            },
            boxShadow: {
                xs: '0 0 0 1px rgba(0,0,0, 0.05)',
                'light-xs': '0 0 0 1px rgba(212,220,236, 0.05)',
                'light-sm': '0 1px 2px 0 rgba(212,220,236, 0.05)',
                light: '0 1px 3px 0 rgba(212,220,236, 0.1), 0 1px 2px 0 rgba(212,220,236, 0.06)',
                'light-md': '0 4px 6px -1px rgba(212,220,236, 0.1), 0 2px 4px -1px rgba(212,220,236, 0.06)',
                'light-lg': '0 10px 15px -3px rgba(212,220,236, 0.1), 0 4px 6px -2px rgba(212,220,236, 0.05)',
                'light-xl': '0 20px 25px -5px rgba(212,220,236, 0.1), 0 10px 10px -5px rgba(212,220,236, 0.04)',
                'light-2xl': '0 25px 50px -12px rgba(212,220,236, 0.25)',
                'light-3xl': '0 35px 60px -15px rgba(212,220,236, 0.3)',
                pop: '0 0 2.25rem #d4dcec',
                'pop-less': '0 0 1rem #d4dcec',
                'pop-lesser': '0 0 .5rem #d4dcec',
                'pop-least': '0 0 .25rem #d4dcec',
                'dark-overlay': '-5px 10px 13px 3px rgba(0,0,0,0.3)',
                'dark-overlay-gray': '-5px 10px 13px 3px rgba(26, 32, 44, .5)',
                'overlay-inner': 'inset 0 1px 5px 0 rgba(0, 0, 0, 0.3)',
                'next-nav': 'rgba(0 0 0 / 35%) 0px 7px 32px',
            },
            width: {
                70: '18rem',
                74: '22rem',
                78: '26rem',
                82: '28rem',
                86: '30rem',
            },
            spacing: {
                70: '18rem',
                74: '22rem',
                78: '26rem',
                82: '28rem',
                86: '30rem',
            },
        },
    },
    variants: {
        boxShadow: ['responsive', 'hover', 'focus', 'group-focus', 'dark'],
        backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
        borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
        border: ['hover', 'focus', 'dark', 'dark-disabled', 'dark-focus'],
        textColor: ['responsive', 'hover', 'focus', 'dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
        maxWidth: ['responsive', 'hover', 'focus'],
    },
    plugins: [require('@tailwindcss/forms')],
};
