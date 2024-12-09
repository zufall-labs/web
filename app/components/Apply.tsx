import Button from "./Button";

export default function Apply() {
    return(
        <div className="w-1/4 font-helvetica-now mobile:mb-12 mobile:w-full tablet:mb-12 tablet:w-full desktop:absolute desktop:right-0 desktop:top-4 desktop:flex desktop:h-24">
            {/* Left side */}
            <div className="mr-auto flex flex-col justify-between desktop:ml-2 desktop:w-2/5">
                {/* Left text */}
                <div className="text-lg font-extrabold leading-5">Research Internships</div>
                {/* Left button */}
                <Button name="Apply now" link="mailto:backoffice@zufall.ai"/>
            </div>
            {/* Spacer */}
            <div className="left-1/2 mx-6 w-[3px] bg-[#000000] mobile:hidden"></div>
            {/* Right side */}
            <div className="ml-auto flex flex-col justify-between mobile:mt-6 tablet:mt-6 desktop:w-2/5">
                {/* Right text */}
                <div className="text-lg font-extrabold leading-5">Open for investment</div>
                {/* Right button */}
                <Button name="Invest in us" link="mailto:backoffice@zufall.ai"/>
            </div>
        </div>
    )
}