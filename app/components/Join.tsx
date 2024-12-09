export default function Join(){
    return(
        <div className="flex h-auto w-1/3 font-helvetica-now mobile:mt-8 mobile:w-full tablet:mt-8 tablet:w-full desktop:absolute desktop:bottom-10 desktop:left-0">
            {/* Left text */}
            <div className="w-1/4 flex-none content-center text-lg font-extrabold leading-5 mobile:w-1/3 tablet:w-1/5">
                Join us at Zufall Labs
            </div>
            {/* Spacer */}
            <div className="w-[3px] flex-none bg-[#000000]"></div>
            {/* Right text */}
            <div className="ml-5 content-center font-medium leading-4 tracking-wide">
                Students and professionals - Join our mission to democratize advanced technology. Your ideas
                matter.
            </div>
        </div>
    )
}