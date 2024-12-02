import React from "react";
import Button from "../ui/Button";

const CTASection = ({ title, buttonTitle, className, textColor }: any) => {
  return (
    <div
      className={`${className} pt-10 lg:pt-20 pb-5 lg:pb-10 flex flex-col items-center gap-5 h-64`}
    >
      <h1 className={`font-MaisonNeueExtendedBold ${textColor} `}>{title}</h1>
      <Button title={buttonTitle} />
    </div>
  );
};

export default CTASection;
