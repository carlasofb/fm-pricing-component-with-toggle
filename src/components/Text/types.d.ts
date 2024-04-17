import { ReactNode } from 'react';

export interface TextProps {
    type: 'p' | 'span';
    style: 'normal' | 'tinted';
    children: ReactNode | string;
    className?: string;
}