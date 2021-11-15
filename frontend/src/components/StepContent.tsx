import React from "react";
import classNames from "classnames";

interface Props {
  children: any[];
  className?: string;
}

const StepContent: React.FC<Props> = ({ children, className }) => {
  return (
    <li className={classNames("flex flex-col mt-4", className)}>{children}</li>
  );
};
export default StepContent;
