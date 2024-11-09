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
            }
        }
    },
    plugins: []
} satisfies Config;
