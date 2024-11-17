import Carousel from "~/components/Carousel";

export default function LandingPage() {
    return (
        /* Whole page */
        <div className="flex min-h-screen justify-center items-center bg-gradient-to-r from-[#E3E3E3] via-[#F7F7F7] to-[#E3E3E3]">
            {/* Content page */}
            <div className="w-full max-w-[80rem]">
                {/* Header */}
                <header className="mobile:w-[85%] mobile:mx-auto mobile:mt-4 mt-8 flex h-16 w-full items-center rounded-lg bg-gradient-to-r from-[#ECECEC] via-[#FCFCFC] to-[#ECECEC] shadow-lg shadow-black/5">
                    <div className="mr-auto flex h-16 items-center p-2">
                        {/* Branding Logo */}
                        <div className="h-12 w-12 rounded-lg bg-[url('/images/zufall-logo-color.png')] bg-cover bg-center bg-no-repeat"></div>

                        {/* Branding Text */}
                        <div className="ml-5 font-helvetica-now font-extrabold mobile:text-lg">Zufall Labs</div>
                    </div>

                    {/* Middle Accents */}
                    <div className="mobile:hidden absolute left-1/2 flex h-2 w-16 -translate-x-1/2 flex-col justify-between">
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
                <main className="mobile:px-8 relative mt-8 min-h-[800px] w-full desktop:bg-[url('/images/hero.png')] bg-center bg-no-repeat p-4">
                    {/* Hero Section */}
                    <div className="mobile:mt-[-40px] mt-32 h-4/5 mobile:w-full w-1/3 space-y-4 font-helvetica-now">
                        {/* Title */}
                        <div className="mobile:text-8xl text-8xl font-bold tracking-tighter desktop:w-[85%] desktop:-ml-4">
                            Entropy & AI as a Service
                        </div>
                        {/* Subtitle */}
                        <div className="text-l w-3/5 mobile:w-full text-lg leading-5 tracking-wide desktop:-ml-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </div>
                        {/* Get in touch button */}
                        <a href="mailto:backoffice@zufall.ai">
                            <button className="desktop:-ml-4 mobile:mt-8 mt-6 h-10 mobile:w-full w-2/5 rounded-lg border border-solid border-black font-medium text-sm">
                                GET IN TOUCH
                            </button>
                        </a>
                    </div>

                    <div className="desktop:hidden w-full my-8">
                        <img src="/images/hero.png"/>
                    </div>

                    {/* Apply Section */}
                    <div className="mobile:w-full desktop:absolute desktop:right-0 desktop:top-0 desktop:flex desktop:h-24 w-1/4 font-helvetica-now mobile:mb-12">
                        {/* Left side */}
                        <div className="desktop:ml-2 mr-auto flex desktop:w-2/5 flex-col justify-between">
                            {/* Left text */}
                            <div className="text-lg font-extrabold leading-5">Research Internships</div>
                            {/* Left button */}
                            <a href="mailto:backoffice@zufall.ai">
                                <button className="h-10 w-full rounded-lg border border-solid border-black uppercase mobile:mt-1 font-medium text-sm">
                                    Apply now
                                </button>
                            </a>
                        </div>
                        {/* Spacer */}
                        <div className="mobile:hidden left-1/2 mx-6 w-[3px] bg-[#000000]"></div>
                        {/* Right side */}
                        <div className="ml-auto mobile:mt-6 flex desktop:w-2/5 flex-col justify-between">
                            {/* Right text */}
                            <div className="text-lg font-extrabold leading-5">Open for investment</div>
                            {/* Right button */}
                            <a href="mailto:backoffice@zufall.ai">
                                <button className="mobile:mt-1 h-10 w-full rounded-lg border border-solid border-black uppercase  font-medium text-sm">
                                    Invest in us
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Issues Widget Section */}
                    <Carousel />
                    {/* Join Section */}
                    <div className=" mobile:w-full desktop:absolute desktop:bottom-10 desktop:left-0 flex h-auto w-1/3 font-helvetica-now mobile:mt-8">
                        {/* Left text */}
                        <div className="mobile:w-1/3 w-1/4 flex-none content-center font-extrabold leading-5 text-lg">Join us at Zufall Labs</div>
                        {/* Spacer */}
                        <div className="flex-none w-[3px] bg-[#000000]"></div>
                        {/* Right text */}
                        <div className="ml-5 content-center leading-4 tracking-wide font-medium">
                            Lorem ipsum dolor sit asd fa s asjdf asdfasdjkfsadf asjdf asdjfs asdf asdf asfd asdf asdf
                            asdf
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
