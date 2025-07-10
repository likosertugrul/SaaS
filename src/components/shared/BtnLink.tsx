interface BtnlinkProps {
    text: string;
    href: string;
    className?: string;
}

export const BtnLink = ({ text, href, className = "" }: BtnlinkProps) => {
    return (
        <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden dark:bg-violet-600  cursor-pointer ${className}`}>
            <span>{text}</span>
        </a>
    )
}