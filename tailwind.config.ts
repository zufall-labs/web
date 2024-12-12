import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "helvetica-now": ["Helvetica Now Display", "sans-serif"]
            },
            fontWeight: {
                thin: "100",
                light: "300",
                normal: "400",
                medium: "500",
                bold: "700",
                "extra-bold": "800",
                black: "900"
            },
            screens: {
                smobile: { max: "394px" },

                mobile: { max: "767px" },

                tablet: { min: "768px", max: "1200px" },

                desktop: { min: "1200px" },
            },
        },
    },
    plugins: [
        require("tailwind-scrollbar-hide")
    ],
} satisfies Config;
