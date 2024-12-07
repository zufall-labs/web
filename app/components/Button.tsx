interface ButtonProps {
    name: string;
    link: string;
    className?: string;
}

export default function Button({ name, link, className }: ButtonProps) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <button  className={className}>
                {name}
            </button>
        </a>
    );
}
