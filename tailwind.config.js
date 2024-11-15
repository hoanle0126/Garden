import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Public Sans Variable", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                landing: "url('resources/assets/background1.png')",
                footer: "url('resources/assets/footer.png')",
                contact: "url('resources/assets/contact.png')",
            },
            colors: {
                primary: "#73c93d",
                secondary: "#FCB142",
                blue: "#1975D1",
                yellow: "#F6C072",
                black: "#000000",
                dark: "#0F120F",
                white: "#FFFFFF",
                red: "#F02D34",
            },
        },
    },
};
