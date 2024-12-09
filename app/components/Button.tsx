interface ButtonProps {
    name: string;
    link: string;
    variant?: 'primary' | 'secondary' |'inverted';
}

export default function Button({ name, link, variant = 'primary' }: ButtonProps) {
    const variantStyles = {
        primary: "h-10 w-full rounded-lg border border-solid border-black text-sm font-medium uppercase mobile:mt-1 tablet:mt-2",
        secondary: "mt-6 h-10 w-2/5 rounded-lg border border-solid border-black text-sm font-medium mobile:mt-8 mobile:w-full tablet:w-full desktop:-ml-4",
        inverted: "ml-auto mr-2 h-12 rounded-lg bg-black px-10 font-helvetica-now font-bold text-white flex items-center justify-center"
    }

    return (
        <a href={link} target="_blank" rel="noreferrer">
            <button  className={variantStyles[variant]}>
                {name}
            </button>
        </a>
    );
}
