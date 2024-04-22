export interface HeadingProps {
    level: 'h1' | 'h2';
    style: 'normal' | 'tinted';
    children: FeaturesTextProps | string | ReactNode;
    className?: string;
}

export interface FeaturesTextProps {
    annual: string;
    monthly: string;
}