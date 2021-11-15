import React from "react";
import classNames from "classnames";

interface Props {
  onChange?: any;
  value?: any;
  className?: string;
  placeholder?: string;
}

const Input: React.FC<Props> = ({
  onChange,
  value,
  className,
  placeholder,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={classNames(
        className,
        "bg-white border-2 border-black focus:border-green-500 outline-none text-black px-4 py-1.5 mt-2 font-sans font-bold text-base transition-all duration-300"
      )}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
