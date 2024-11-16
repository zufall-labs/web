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
                mobile: { max: "479px" },
                // => @media (max-width: 479px) { ... }

                tablet: { max: "767px" },
                // => @media (max-width: 767px) { ... }

                desktop: { min: "1200px" },
                // => @media (min-width: 1200px) { ... }
            },
        },
    },
    plugins: []
} satisfies Config;
