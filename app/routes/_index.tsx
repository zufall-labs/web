export default function LandingPage() {
    return (
        /* Whole page */
        <div className="min-h-screen flex justify-center bg-gradient-to-r from-[#E3E3E3] via-[#F7F7F7] to-[#E3E3E3]">
            { /* Content page */}
            <div className="w-full max-w-[84rem] min-h-screen">
                {/* Header */}
                <header
                    className="mt-8 w-full h-16 flex items-center bg-gradient-to-r from-[#ECECEC] via-[#FCFCFC] to-[#ECECEC] shadow-lg shadow-black/5 rounded-lg">
                    <div className="mr-auto flex h-16 p-2 items-center">
                        {/* Branding Logo */}
                        <div
                            className="w-12 h-12 bg-[url('/images/zufall-logo-color.png')] bg-no-repeat bg-center bg-cover rounded-lg"></div>

                        {/* Branding Text */}
                        <div className="ml-5 font-helvetica-now font-bold">Zufall Labs</div>
                    </div>

                    {/* Middle Accents */}
                    <div className="w-16 h-2 absolute left-1/2 -translate-x-1/2 flex flex-col justify-between">
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                    </div>

                    {/* GitHub Button */}
                    <div className="ml-auto mr-2">
                        <button className="bg-black text-white rounded-lg h-12 px-10 font-helvetica-now font-bold">
                            GitHub
                        </button>
                    </div>
                </header>

                {/* Main content area */}
                {/* Removing the green border destroyed the layout. Adding 'p-4' fixed that.*/}
                <main
                    className="mt-8 relative w-full min-h-[calc(100vh-8rem)] bg-[url('/images/hero.png')] bg-no-repeat bg-center p-4">
                    {/* Hero Section */}
                    <div className="w-1/3 h-4/5 mt-32 space-y-4 font-helvetica-now">
                        {/* Title */}
                        <div className="font-bold text-8xl">
                            Entropy & AI as a Service
                        </div>
                        {/* Subtitle */}
                        <div className="w-3/5 text-l">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et
                            dolore magna aliqua.
                        </div>
                        {/* Connect button */}
                        <div>
                            <button className="border-solid border-2 border-black text-[#89458a] rounded-lg h-10 w-2/5">
                                GET IN TOUCH
                            </button>
                        </div>
                    </div>

                    {/* Join Section */}
                    <div className="absolute bottom-10 left-0 w-1/3 h-20 font-helvetica-now flex">
                        { /* Left text */}
                        <div className="font-bold w-1/5 content-center">
                            Join us at Zufall Labs
                        </div>
                        {/* Spacer */}
                        <div className="ml-2 w-0.5 bg-[#000000]"></div>
                        {/* Right text */}
                        <div className="w-4/5 ml-3 content-center">
                            Lorem ipsum dolor sit asd fa s asjdf asdfasdjkfsadf asjdf asdjfs asdf asdf asfd asdf asdf
                            asdf asdf
                        </div>
                    </div>

                    {/* Apply Section */}
                    <div className="absolute top-0 right-0 w-1/4 h-28 font-helvetica-now flex">
                        {/* Left side */}
                        <div className="w-2/5 mr-auto ml-2 flex flex-col justify-between">
                            {/* Left text */}
                            <div className="font-bold text-xl">
                                Research internships
                            </div>
                            {/* Left button */}
                            <button
                                className="border-solid border-2 border-black text-[#89458a] rounded-lg h-10 w-full">
                                Apply now
                            </button>
                        </div>
                        {/* Spacer */}
                        <div className="left-1/2 mx-6 w-0.5 bg-[#000000]"></div>
                        {/* Right side */}
                        <div className="w-2/5 ml-auto mr-2 flex flex-col justify-between">
                            {/* Right text */}
                            <div className=" text-xl font-bold">
                                Open for investment
                            </div>
                            {/* Right button */}
                            <button
                                className="border-solid border-2 border-black text-[#89458a] rounded-lg h-10 w-full">
                                Invest in us
                            </button>
                        </div>
                    </div>

                    {/* Issues Widget Section */}
                    <div
                        className="absolute bottom-10 right-0 w-1/3 h-96 rounded-lg font-helvetica-now font-bold bg-[rgba(255,255,255,0.4)] backdrop-blur-sm">
                        {/* Content block */}
                        <div className="m-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]">
                            {/* Title */}
                            <div className="h-14 w-1/4">
                                Currently working on
                            </div>
                            {/* Spacer */}
                            <div className="mt-2 w-1/4 h-0.5 bg-[#000000]"></div>
                            {/* Issue content */}
                            <div className="mt-3 overflow-scroll h-[calc(100%-5.5rem)]">
                                <div>
                                    - First item: Asdf
                                </div>
                                <div>
                                    - Second item: Asdf Asdf
                                </div>
                                <div>
                                    - Third item: Asdf Asdf Asdf
                                </div>
                                <div>
                                    - Fourth item: Asdf Asdf Asdf Asdf
                                </div>
                                <div>
                                    - Fifth item: Asdf Asdf Asdf Asdf Asdf
                                </div>
                                <div>
                                    - Sixth item: Asdf Asdf Asdf Asdf Asdf Asdf
                                </div>
                                <div>
                                    - Seventh item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf
                                </div>
                                <div>
                                    - Eighth item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf
                                </div>
                                <div>
                                    - Ninth item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf
                                </div>
                                <div>
                                    - Tenth item: Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf Asdf
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
