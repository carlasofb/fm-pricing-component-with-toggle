import { ButtonProps } from "../Button/types";
import { HeadingProps } from "../Heading/types";
import { TextProps } from "../Text/types";

export interface PlanCardProps {
    style: 'white' | 'purple';
    name: TextProps;
    price: HeadingProps;
    features: TextProps[];
    button: ButtonProps;
    className?: string;
}