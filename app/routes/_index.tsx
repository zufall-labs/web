import Carousel from "~/components/Carousel";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import Apply from "~/components/Apply";
import Join from "~/components/Join";
import Footer from "~/components/Footer";
import { type LoaderFunction } from "@remix-run/node";
import type { GitHubLoaderData } from "~/types/github";

export const loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url);
    const apiUrl = `${url.origin}/api/issues`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error(`API returned ${response.status}`);
        }

        const responseData: GitHubLoaderData = await response.json();
        return Response.json(responseData);
    } catch (error) {
        console.error("Error fetching issues:", error);
        const responseData: GitHubLoaderData = { data: [] };
        return Response.json(responseData);
    }
};

export default function LandingPage() {
    return (
        /* Whole page */
        <div className="flex min-h-screen items-center justify-center">
            {/* Content page */}
            <div className="w-full max-w-[80rem]">
                {/* Header */}
                <Header/>
                {/* Main content area */}
                {/* Removing the green border destroyed the layout. Adding 'p-4' fixed that.*/}
                <main className="relative mt-4 min-h-[788px] w-full bg-center bg-no-repeat p-4 mobile:px-8 tablet:px-16 desktop:bg-[url('/images/hero.png')]">
                    {/* Hero Section */}
                    <Hero/>
                    {/* Apply Section */}
                    <Apply/>
                    {/* Issues Widget Section */}
                    <Carousel />
                    {/* Join Section */}
                    <Join/>
                </main>
                <Footer/>
            </div>
        </div>
    );
}
