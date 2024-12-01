import Carousel from "~/components/Carousel";
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
                <header className="mt-8 flex h-16 w-full items-center rounded-lg bg-gradient-to-r from-[#ECECEC] via-[#FCFCFC] to-[#ECECEC] shadow-lg shadow-black/5 mobile:mx-auto mobile:mt-4 mobile:w-[85%] tablet:mx-auto tablet:w-[90%]">
                    <div className="mr-auto flex h-16 items-center p-2">
                        {/* Branding Logo */}
                        <div className="h-12 w-12 rounded-lg bg-[url('/images/zufall-logo-color.png')] bg-cover bg-center bg-no-repeat"></div>

                        {/* Branding Text */}
                        <div className="ml-5 font-helvetica-now font-extrabold mobile:text-lg">Zufall Labs</div>
                    </div>

                    {/* Middle Accents */}
                    <div className="absolute left-1/2 flex h-2 w-16 -translate-x-1/2 flex-col justify-between mobile:hidden">
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                    </div>

                    {/* GitHub Button */}
                    <a href="https://github.com/zufall-labs" target="_blank" className="ml-auto mr-2">
                        <button className="h-12 rounded-lg bg-black px-10 font-helvetica-now font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black">
                            GitHub
                        </button>
                    </a>
                </header>

                {/* Main content area */}
                {/* Removing the green border destroyed the layout. Adding 'p-4' fixed that.*/}
                <main className="relative mt-4 min-h-[788px] w-full bg-center bg-no-repeat p-4 mobile:px-8 tablet:px-16 desktop:bg-[url('/images/hero.png')]">
                    {/* Hero Section */}
                    <div className="mt-28 h-4/5 w-1/3 space-y-4 font-helvetica-now mobile:mt-[-40px] mobile:w-full tablet:mt-0 tablet:w-full">
                        {/* Title */}
                        <div className="text-8xl font-bold tracking-tighter mobile:mt-6 mobile:text-8xl tablet:text-center tablet:text-9xl desktop:-ml-4 desktop:w-[85%]">
                            Entropy & AI as a Service
                        </div>
                        {/* Subtitle */}
                        <div className="text-l w-3/5 text-lg leading-5 tracking-wide mobile:w-full tablet:w-full desktop:-ml-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </div>
                        {/* Get in touch button */}
                        <a href="mailto:backoffice@zufall.ai">
                            <button className="mt-6 h-10 w-2/5 rounded-lg border border-solid border-black text-sm font-medium mobile:mt-8 mobile:w-full tablet:w-full desktop:-ml-4">
                                GET IN TOUCH
                            </button>
                        </a>
                    </div>

                    <div className="my-8 w-full desktop:hidden">
                        <img className="tablet:mx-auto" src="/images/hero.png" />
                    </div>

                    {/* Apply Section */}
                    <div className="w-1/4 font-helvetica-now mobile:mb-12 mobile:w-full tablet:mb-12 tablet:w-full desktop:absolute desktop:right-0 desktop:top-4 desktop:flex desktop:h-24">
                        {/* Left side */}
                        <div className="mr-auto flex flex-col justify-between desktop:ml-2 desktop:w-2/5">
                            {/* Left text */}
                            <div className="text-lg font-extrabold leading-5">Research Internships</div>
                            {/* Left button */}
                            <a href="mailto:backoffice@zufall.ai">
                                <button className="h-10 w-full rounded-lg border border-solid border-black text-sm font-medium uppercase mobile:mt-1 tablet:mt-2">
                                    Apply now
                                </button>
                            </a>
                        </div>
                        {/* Spacer */}
                        <div className="left-1/2 mx-6 w-[3px] bg-[#000000] mobile:hidden"></div>
                        {/* Right side */}
                        <div className="ml-auto flex flex-col justify-between mobile:mt-6 tablet:mt-6 desktop:w-2/5">
                            {/* Right text */}
                            <div className="text-lg font-extrabold leading-5">Open for investment</div>
                            {/* Right button */}
                            <a href="mailto:backoffice@zufall.ai">
                                <button className="h-10 w-full rounded-lg border border-solid border-black text-sm font-medium uppercase mobile:mt-1 tablet:mt-2">
                                    Invest in us
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Issues Widget Section */}
                    <Carousel />
                    {/* Join Section */}
                    <div className="flex h-auto w-1/3 font-helvetica-now mobile:mt-8 mobile:w-full tablet:mt-8 tablet:w-full desktop:absolute desktop:bottom-10 desktop:left-0">
                        {/* Left text */}
                        <div className="w-1/4 flex-none content-center text-lg font-extrabold leading-5 mobile:w-1/3 tablet:w-1/5">
                            Join us at Zufall Labs
                        </div>
                        {/* Spacer */}
                        <div className="w-[3px] flex-none bg-[#000000]"></div>
                        {/* Right text */}
                        <div className="ml-5 content-center font-medium leading-4 tracking-wide">
                            Lorem ipsum dolor sit asd fa s asjdf asdfasdjkfsadf asjdf asdjfs asdf asdf asfd asdf asdf
                            asdf
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
