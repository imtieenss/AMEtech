/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Quét tất cả file trong src
    ],
    theme: {
        extend: {
            screens: {
                'custom': '1030px',
            },
            colors: { 
                primary: "#F6A64F",
                secondary: "#b56141",
                background: "#FFFCF8",
                white: '#FBFBFB',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, #f4a44f, #ac573f)',
            },
        },
    },
    plugins: [],
};
