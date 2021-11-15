import React, { useState } from "react";
import classNames from "classnames";

interface Props {
  address: string;
  truncateAmount: number;
  className?: string;
}

const Address: React.FC<Props> = ({ address, truncateAmount, className }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <span className={classNames(className, { "text-sm": expanded })}>
        {!expanded && truncateAmount > 0 ? (
          <span>
            {address.slice(0, truncateAmount)}
            <span>...</span>
            <span>{address.slice(-truncateAmount)}</span>
          </span>
        ) : (
          address
        )}
      </span>
      <button
        className="ml-4 text-xs text-gray-800 border border-gray-500 border-solid px-1 py-0.5 rounded-lg bg-gray-100"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Hide full address" : "Show full address"}
      </button>
    </>
  );
};

export default Address;
