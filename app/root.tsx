import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

import "~/styles/tailwind.css";

export const meta: MetaFunction = () => {
    return [
    { title: "Zufall Labs - Landing Page" },
    {
        name: "description",
        content: "Democratizing enterprise-grade technology to help teams of any size build amazing projects.",
    },
    {
        property: "og:title",
        content: "Zufall Labs - Landing Page",
    },
    {
        property: "og:description",
        content: "Democratizing enterprise-grade technology to help teams of any size build amazing projects.",
    },
    {
        property: "og:image",
        content: " https://zufall.ai/images/zufall-banner-color-no-zoom.png",
    },
    {
        property: "og:url",
        content: "https://zufall.ai",
    },
    {
        property: "og:type",
        content: "website",
    },
    ];
};


export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
                <link rel="icon" href="/images/zufall-logo-color.png" type="image/png" />
                <title>Zufall Labs</title>
            </head>
            <body className="bg-gradient-to-r from-[#E3E3E3] via-[#F7F7F7] to-[#E3E3E3]">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
