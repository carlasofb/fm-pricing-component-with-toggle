export interface HeadingProps {
    level: 'h1' | 'h2';
    style: 'normal' | 'tinted';
    children: string | ReactNode;
    className?: string;
}  