import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { TokenContext } from "../hardhat/SymfoniContext";
import Input from "./Input";
import Button from "./Button";

interface Props {
  className?: string;
}

const Step5: React.FC<Props> = ({ className }) => {
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
    <li className={className}>
      <p className="text-base font-semibold">
        Cover your tracks! Make a button to transfer an amount of the Test token
        (TST) from your account to another account:
      </p>
      <Input
        className="w-full"
        value={amountToMove}
        onChange={(e: any) => setAmountToMove(e.target.value)}
      />
      <Input
        className="w-full"
        value={recipient}
        onChange={(e: any) => setRecipient(e.target.value)}
      />
      <Button onClick={() => moveTST()}>Send</Button>
      <p className="mt-2 text-sm">HINT: Use the 'tokenContext' here too!</p>
    </li>
  );
};

export default Step5;
