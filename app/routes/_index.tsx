export default function LandingPage() {
    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-r from-[#E3E3E3] via-[#F7F7F7] to-[#E3E3E3]">
            <div className="w-full max-w-[84rem] min-h-screen">
                {/* Header */}
                <header className="mt-8 w-full h-16 flex items-center bg-gradient-to-r from-[#ECECEC] via-[#FCFCFC] to-[#ECECEC] shadow-lg shadow-black/5 rounded-lg">
                    <div className="mr-auto flex h-16 p-2 items-center">
                        {/* Branding Logo */}
                        <div className="w-12 h-12 bg-[url('/images/zufall-logo-color.png')] bg-no-repeat bg-center bg-cover rounded-lg"></div>

                        {/* Branding Text */}
                        <div className="ml-5 font-bold">Zufall Labs</div>
                    </div>

                    {/* Middle Accents */}
                    <div className="w-16 h-2 absolute left-1/2 -translate-x-1/2 flex flex-col justify-between">
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                        <div className="h-[2px] w-16 bg-[#7E7E7E]"></div>
                    </div>

                    {/* GitHub Button */}
                    <div className="ml-auto mr-2">
                        <button className="bg-black text-white rounded-lg h-12 px-8 font-bold">
                            GitHub
                        </button>
                    </div>
                </header>

                {/* Main content area */}
                <main className="mt-8 relative w-full border-4 border-green-500 min-h-[calc(100vh-8rem)] bg-[url('/images/hero.png')] bg-no-repeat bg-center">

                    {/* Hero Section */}
                    <div className="w-1/3 h-8 mt-52 space-y-4 border-4 border-red-500"></div>

                    {/* Join Section */}
                    <div className="absolute bottom-10 left-0 w-1/3 h-16 border-4 border-red-500"></div>

                    {/* Apply Section */}
                    <div className="absolute top-0 right-0 w-1/3 h-16 border-4 border-red-500"></div>

                    {/* Issues Widget Section */}
                    <div className="absolute bottom-10 right-0 w-1/3 h-96 border-4 border-red-500"></div>
                </main>
            </div>
        </div>
    );
}