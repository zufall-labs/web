import { useState } from "react";

export default function Carousel() {
    const [items] = useState<string[]>([
        "Buzzmod Tempor Indci",
        "Adipiscing Elit Sed Do",
        "Sit Amet Consectetur",
        "Lorem Ipsum Dolor",
        "Sit Amet Consectetur",
        "Adipiscing Elit Sed Do",
        "Sit Amet Consectetur",
        "Adipiscing Elit Sed Do"
    ]);

    const [activeIndex, setActiveIndex] = useState<number>(3);

    const handleScroll = (direction: "up" | "down"): void => {
        setActiveIndex((previousIndex) => {
            if (direction === "up" && previousIndex > 0) return previousIndex - 1;
            if (direction === "down" && previousIndex < items.length - 1) return previousIndex + 1;

            return previousIndex;
        });
    };

    return (
        <div className="mobile:w-full desktop:absolute desktop:bottom-10 desktop:right-0 h-[25rem] w-[29%] rounded-2xl bg-[rgba(255,255,255,0.4)] font-helvetica-now backdrop-blur-lg pt-8 pl-8 pr-4 pb-4 overflow-hidden">
            {/* Content block */}
            <div className="h-full w-full">
                {/* Title */}
                <div className="h-14 w-1/3 leading-5 text-lg tracking-tight font-extrabold">Currently working on</div>
                {/* Spacer */}
                <div className="h-[3px] w-1/3 bg-[#000000]"></div>
                {/* Issue content */}
                <div
                    onWheel={(e) => handleScroll(e.deltaY > 0 ? "down" : "up")}
                    className="mt-4 h-[calc(100%-5.5rem)] flex-col items-start gap-2 overflow-hidden scrollbar-none text-2xl text-left"
                >
                    {items.map((item, index) => {
                        const distance = Math.abs(index - activeIndex);
                        const scale = 1 - distance * 0.2; // Scale reduces based on distance
                        const opacity = 1 - distance * 0.2; // Opacity reduces with distance
                        const zIndex = items.length - distance;

                        return (
                            <div key={index} className="w-full flex">
                                <div
                                    className={`transition-transform duration-300 font-medium ${index === activeIndex ? "font-bold" : ""
                                        }`}
                                    style={{
                                        transform: `scale(${scale})`,
                                        transformOrigin: "left", // Set the transform origin to left
                                        opacity: opacity,
                                        zIndex: zIndex,
                                    }}
                                >
                                    {item}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}