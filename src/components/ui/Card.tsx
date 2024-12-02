import { CardProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const Card = ({
  className,
  title,
  titleSize,
  src,
  imgHeight,
  imgWidth,
  imgPosition,
  description,
  descSize,
}: CardProps) => {
  return (
    <div className={`${className} relative flex flex-col items-center`}>
      <Image
        src={src}
        alt="image"
        width={imgWidth}
        height={imgHeight}
        className={`${imgPosition} object-contain`}
      />

      <div className="flex flex-col pt-5 w-full">
        <h3
          className={`${titleSize} font-MaisonNeueExtendedExtraBold font-black`}
        >
          {title}
        </h3>
        <p className={`${descSize} font-MaisonNeueBook leading-tight pt-2`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
