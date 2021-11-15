import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { CurrentAddressContext } from "../hardhat/SymfoniContext";
import {
  abi as tokenAbi,
  address as tokenAddress,
} from "../hardhat/deployments/localhost/Token.json";
import Button from "./Button";
import Input from "./Input";

interface Props {
  provider: any;
  className?: string;
}

const Step3: React.FC<Props> = ({ provider, className }) => {
  const [amountToSteal, setAmountToSteal] = useState("1000");
  const [vicsWallet, setVicsWallet] = useState<any>();

  useEffect(() => {
    (async () => {
      setVicsWallet(
        ethers.Wallet.fromMnemonic(
          "test test test test test test test test test test test junk"
        ).connect(provider)
      );
    })();
  }, []);

  const [userAddress] = useContext(CurrentAddressContext);

  const stealTST = async (amountToSteal: string) => {
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, provider);
    const contractWithSigner = tokenContract.connect(vicsWallet);

    const tx = await contractWithSigner.transfer(
      userAddress,
      ethers.utils.parseUnits(amountToSteal, 18)
    );
    await tx.wait();
  };

  return (
    <li className={className}>
      <div>
        <p className="text-base font-semibold">Get some TST (Test Tokens)</p>
      </div>
      <div className="text-sm">
        <p>
          <strong>I know a someone who has loads,... 🦈 ! </strong>
        </p>
        <p>
          Vic's account holds a lot of TST. Help yourself to it - she left her
          key under the mat.
        </p>
        <Input
          placeholder="Amount to steal"
          value={amountToSteal}
          onChange={(e: any) => setAmountToSteal(e.target.value)}
        />
        <Button onClick={() => stealTST(amountToSteal)}>Steal TST!</Button>
        <p className="mt-2 text-sm">
          HINT: If you need some more help here, have a look at the
          'BorrowFromVic' and 'VicsClaim' components ... there are certainly
          enought hints in those to accomplish the task!!
        </p>
      </div>
    </li>
  );
};

export default Step3;
