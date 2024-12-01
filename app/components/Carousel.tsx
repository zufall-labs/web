import { useState } from "react";
import { useLoaderData } from "@remix-run/react";
import type { GitHubIssue, GitHubLoaderData } from "~/types/github";

function sanitizeText(text: string): string {
    return text.replace(/\[[^\]]+\]:\s*/g, "");
}

export default function Carousel() {
    const { data: resultSet } = useLoaderData<GitHubLoaderData>();
    const issues: GitHubIssue[] = resultSet.flatMap(repo => repo.issues);

    const [activeIndex, setActiveIndex] = useState<number>(3);

    const handleScroll = (direction: "up" | "down"): void => {
        setActiveIndex(previousIndex => {
            if (direction === "up" && previousIndex > 0) return previousIndex - 1;
            if (direction === "down" && previousIndex < issues.length - 1) return previousIndex + 1;

            return previousIndex;
        });
    };

    return (
        <div className="h-[25rem] w-[29%] overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.4)] pb-4 pl-8 pr-4 pt-8 font-helvetica-now backdrop-blur-lg mobile:w-full tablet:w-full desktop:absolute desktop:bottom-10 desktop:right-0">
            {/* Content block */}
            <div className="h-full w-full">
                {/* Title */}
                <div className="h-14 w-1/3 text-lg font-extrabold leading-5 tracking-tight tablet:h-10">
                    Currently working on
                </div>
                {/* Spacer */}
                <div className="h-[3px] w-1/3 bg-[#000000]"></div>
                {/* Issue content */}
                <div
                    onWheel={e => handleScroll(e.deltaY > 0 ? "down" : "up")}
                    className="scrollbar-none mt-4 h-[calc(100%-5.5rem)] flex-col items-start gap-2 overflow-hidden text-left text-2xl">
                    {issues.map((item: GitHubIssue, index: number) => {
                        const distance = Math.abs(index - activeIndex);
                        const scale = 1 - distance * 0.2; // Scale reduces based on distance
                        const opacity = 1 - distance * 0.2; // Opacity reduces with distance
                        const zIndex = issues.length - distance;

                        return (
                            <div key={index} className="flex w-full">
                                <div
                                    className={`font-medium transition-transform duration-300 ${
                                        index === activeIndex ? "font-bold" : ""
                                    }`}
                                    style={{
                                        transform: `scale(${scale})`,
                                        transformOrigin: "left", // Set the transform origin to left
                                        opacity: opacity,
                                        zIndex: zIndex
                                    }}>
                                    {sanitizeText(item.title)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
