import { CarouselProps } from "./types";
import { MouseEvent } from "react";
export declare type CarouselRef = {
    nextFunction: (event?: MouseEvent<HTMLButtonElement>) => void;
    prevFunction: (event?: MouseEvent<HTMLButtonElement>) => void;
};
export declare const Carousel: import("react").ForwardRefExoticComponent<CarouselProps & import("react").RefAttributes<CarouselRef>>;
export default Carousel;
