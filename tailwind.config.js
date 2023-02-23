/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        container:{
            center: true,
            padding: '16px'
        },
        extend: {
            spacing: {
                '50': '12.5rem',
            },
            fontFamily: {
                'inter': ['Inter']
            },
            colors:{
                primary: '#6c63ff ',
                secondary: '#64748b',
                dark: '#0f172a',
            },
            screens:{
                '2xl': '1320px',
            },
            boxShadow: {
                'shadow-header': 'inset 0 -1px 0px 0px rgba(0, 0, 0, 0.2)',
            },
        },
    },
    plugins: [],
}
