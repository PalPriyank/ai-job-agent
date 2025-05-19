import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button: React.FC<ButtonProps> = ({ variant = "default", className = "", ...props }) => {
  const baseStyles =
    "inline-flex items-center px-4 py-2 border text-sm font-medium rounded-xl focus:outline-none focus:ring-2 transition ease-in-out duration-150";
  const variants = {
    default: "bg-blue-600 text-white border-transparent hover:bg-blue-700",
    outline: "bg-white text-gray-800 border-gray-300 hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    />
  );
};
