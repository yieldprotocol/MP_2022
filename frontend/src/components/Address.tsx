import React from "react";

interface Props {
  address: string;
  truncateAmount: number;
}

const Address: React.FC<Props> = ({ address, truncateAmount }) => {
  // TODO: make clickable and expandable
  return (
    <span>
      {truncateAmount > 0 ? (
        <span>
          {address.slice(0, truncateAmount)}
          <span>...</span>
          <span>{address.slice(-truncateAmount)}</span>
        </span>
      ) : (
        address
      )}
    </span>
  );
};

export default Address;
