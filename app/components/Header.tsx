export default function Header() {
    return(
        <header className="flex h-16 w-full items-center rounded-lg bg-gradient-to-r from-[#ECECEC] via-[#FCFCFC] to-[#ECECEC] shadow-lg shadow-black/5 mobile:mx-auto mobile:mt-4 mobile:w-[85%] tablet:mx-auto tablet:w-[90%]">
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
            <a href="https://github.com/zufall-labs" target="_blank" rel="noreferrer" className="ml-auto mr-2">
                <button className="h-12 rounded-lg bg-black px-10 font-helvetica-now font-bold text-white">
                    GitHub
                </button>
            </a>
        </header>
    )
}