import { ReactNode } from "react";

export interface ButtonProps {
    style?: 'primary' | 'secondary';
    children?: ReactNode;
    className?: string;
}  