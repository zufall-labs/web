import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration
} from "@remix-run/react";

import "~/styles/tailwind.css";

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
            <link rel="icon" href="public/images/zufall-logo-color.png" type="image/png"/>
            <title>Zufall Labs</title>
        </head>
        <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        </body>
        </html>
    );
}
