const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3570B5",
                secondary: "#6DB0FF",
                tertiary: "#F8F8F8",
                gradient: "radial-gradient(178.69% 362.78% at 107.07% -9.42%, #003676 0%, #A0CCFF 100%)",
            },
            fontFamily: {
                sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
            },
            container: {
                center: true,
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
    
}