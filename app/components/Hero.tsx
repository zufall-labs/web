import Button from "./Button"

export default function Hero() {
    return(
        <div>
            <div className="mt-28 h-4/5 w-1/3 space-y-4 font-helvetica-now mobile:mt-[-40px] mobile:w-full tablet:mt-0 tablet:w-full">
                {/* Title */}
                <div className="text-8xl font-bold tracking-tighter mobile:mt-6 mobile:text-8xl tablet:text-center tablet:text-9xl desktop:-ml-4 desktop:w-[85%]">
                    Entropy & AI as a Service
                </div>
                {/* Subtitle */}
                <div className="text-l w-[62%] text-lg leading-5 tracking-wide mobile:w-full tablet:w-full desktop:-ml-4">
                    Bringing powerful entropy and AI solutions within reach. Our platform makes enterprise-grade
                    tools accessible and affordable, helping teams of any size build amazing projects.
                </div>
                {/* Get in touch button */}
                <Button name="GET IN TOUCH" link="mailto:backoffice@zufall.ai" variant="secondary"/>
            </div>

            <div className="my-8 w-full desktop:hidden">
                <img className="tablet:mx-auto" src="/images/hero.png" alt="Round Pink fluffy construct"/>
            </div>
        </div>
    )
}