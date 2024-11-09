export default function LandingPage() {
    return (
        /* Whole page */
        <div className="flex min-h-screen justify-center bg-gradient-to-r from-[#E3E3E3] via-[#F7F7F7] to-[#E3E3E3]">
            {/* Content page */}
            <div className="min-h-screen w-full max-w-[84rem]">
                {/* Header */}
                <header className="mt-8 flex h-16 w-full items-center rounded-lg bg-gradient-to-r from-[#ECECEC] via-[#FCFCFC] to-[#ECECEC] shadow-lg shadow-black/5">
                    <div className="mr-auto flex h-16 items-center p-2">
                        {/* Branding Logo */}
                        <div className="h-12 w-12 rounded-lg bg-[url('/images/zufall-logo-color.png')] bg-cover bg-center bg-no-repeat"></div>

                        {/* Branding Text */}
                        <div className="ml-5 font-helvetica-now font-bold">Zufall Labs</div>
                    </div>

                    {/* Middle Accents */}
                    <div className="absolute left-1/2 flex h-2 w-16 -translate-x-1/2 flex-col justify-between">
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                    </div>

                    {/* GitHub Button */}
                    <a href="https://github.com/zufall-labs" target="_blank" className="ml-auto mr-2">
                        <button className="h-12 rounded-lg bg-black px-10 font-helvetica-now font-bold text-white">
                            GitHub
                        </button>
                    </a>
                </header>

                {/* Main content area */}
                {/* Removing the green border destroyed the layout. Adding 'p-4' fixed that.*/}
                <main className="relative mt-8 min-h-[calc(100vh-8rem)] w-full bg-[url('/images/hero.png')] bg-center bg-no-repeat p-4">
                    {/* Hero Section */}
                    <div className="mt-32 h-4/5 w-1/3 space-y-4 font-helvetica-now">
                        {/* Title */}
                        <div className="text-8xl font-bold">Entropy & AI as a Service</div>
                        {/* Subtitle */}
                        <div className="text-l w-3/5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </div>
                        {/* Get in touch button */}
                        <a href="mailto:backoffice@zufall.ai">
                            <button className="mt-3 h-10 w-2/5 rounded-lg border-2 border-solid border-black text-[#89458a]">
                                GET IN TOUCH
                            </button>
                        </a>
                    </div>

                    {/* Join Section */}
                    <div className="absolute bottom-10 left-0 flex h-20 w-1/3 font-helvetica-now">
                        {/* Left text */}
                        <div className="w-1/5 content-center font-bold">Join us at Zufall Labs</div>
                        {/* Spacer */}
                        <div className="ml-2 w-0.5 bg-[#000000]"></div>
                        {/* Right text */}
                        <div className="ml-3 w-4/5 content-center">
                            Lorem ipsum dolor sit asd fa s asjdf asdfasdjkfsadf asjdf asdjfs asdf asdf asfd asdf asdf
                            asdf asdf
                        </div>
                    </div>

                    {/* Apply Section */}
                    <div className="absolute right-0 top-0 flex h-28 w-1/4 font-helvetica-now">
                        {/* Left side */}
                        <div className="ml-2 mr-auto flex w-2/5 flex-col justify-between">
                            {/* Left text */}
                            <div className="text-xl font-bold">Research internships</div>
                            {/* Left button */}
                            <a href="mailto:backoffice@zufall.ai">
                                <button className="h-10 w-full rounded-lg border-2 border-solid border-black text-[#89458a]">
                                    Apply now
                                </button>
                            </a>
                        </div>
                        {/* Spacer */}
                        <div className="left-1/2 mx-6 w-0.5 bg-[#000000]"></div>
                        {/* Right side */}
                        <div className="ml-auto mr-2 flex w-2/5 flex-col justify-between">
                            {/* Right text */}
                            <div className="text-xl font-bold">Open for investment</div>
                            {/* Right button */}
                            <a href="mailto:backoffice@zufall.ai">
                                <button className="h-10 w-full rounded-lg border-2 border-solid border-black text-[#89458a]">
                                    Invest in us
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Issues Widget Section */}
                    <div className="absolute bottom-10 right-0 h-96 w-1/3 rounded-lg bg-[rgba(255,255,255,0.4)] font-helvetica-now font-bold backdrop-blur-sm">
                        {/* Content block */}
                        <div className="m-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]">
                            {/* Title */}
                            <div className="h-14 w-1/4">Currently working on</div>
                            {/* Spacer */}
                            <div className="mt-2 h-0.5 w-1/4 bg-[#000000]"></div>
                            {/* Issue content */}
                            <div className="mt-3 h-[calc(100%-5.5rem)] overflow-scroll">
                                <div>- First item: Asdf</div>
                                <div>- Second item: Asdf Asdf</div>
                                <div>- Third item: Asdf Asdf Asdf</div>
                                <div>- Fourth item: Asdf Asdf Asdf Asdf</div>
                                <div>- Fifth item: Asdf Asdf Asdf Asdf Asdf</div>
                                <div>- Sixth item: Asdf Asdf Asdf Asdf Asdf Asdf</div>
                                <div>- Seventh item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf</div>
                                <div>- Eighth item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf</div>
                                <div>- Ninth item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf</div>
                                <div>- Tenth item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
