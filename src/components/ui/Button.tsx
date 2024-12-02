import React from "react";

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="bg-green px-6 py-4 rounded-full font-MaisonNeueDemi text-white">
      {title}
    </button>
  );
};

export default Button;
