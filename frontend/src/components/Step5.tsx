import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { TokenContext } from "../hardhat/SymfoniContext";

interface Props {}

const Step5: React.FC<Props> = () => {
  const [amountToMove, setAmountToMove] = useState("1000");
  const [recipient, setRecipient] = useState(
    "0xbffede4dd2df797c350ec61087b5b31d28780c77"
  );

  const token = useContext<any>(TokenContext);

  const moveTST = async () => {
    await token.instance.transfer(
      recipient,
      ethers.utils.parseUnits(amountToMove, 18)
    );
  };

  return (
    <li>
      <p>
        Cover your tracks! Make this{" "}
        <button onClick={() => moveTST()}> button </button> transfer{" "}
        <input
          value={amountToMove}
          onChange={(e) => setAmountToMove(e.target.value)}
        />{" "}
        of the Test token (TST) from your account to another account:
        <input
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />{" "}
        .
      </p>
      <p style={{ fontSize: "14px" }}>HINT: Use the 'tokenContext' here too!</p>
    </li>
  );
};

export default Step5;
