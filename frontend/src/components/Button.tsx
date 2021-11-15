import React from "react";
import classNames from "classnames";

interface Props {
  children?: any;
  onClick?: any;
  className?: string;
}

const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button
      className={classNames(
        "bg-gray-900 hover:bg-green-600 hover:text-black text-white duration-300 transition-all px-4 py-2 mt-2 font-sans font-bold text-base",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
