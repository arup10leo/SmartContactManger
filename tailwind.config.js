/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/**/*.{html,js}",
        "./src/main/resources/templates/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: "#0a0a0a",
                }
            }
        }
    },
    plugins: [],

}