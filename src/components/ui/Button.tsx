import React from "react";

const Button = ({ title }: any) => {
  return (
    <button className="bg-green px-6 py-4 rounded-full font-MaisonNeueDemi text-white">
      {title}
    </button>
  );
};

export default Button;
