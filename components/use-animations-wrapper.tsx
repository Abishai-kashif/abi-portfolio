"use client";
import UseAnimations from "react-useanimations"

function UseAnimationsWrapper({ animation, className, size = 24, strokeColor = '#fff' }: IProps) {
  return (
        <UseAnimations animation={animation} size={size} strokeColor={strokeColor}
        className={className} />
  );
}


interface IProps {
  animation: any;
  className?: string;
  size?: number;
  strokeColor?: string;
}

export default UseAnimationsWrapper;
