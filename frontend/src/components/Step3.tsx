import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { CurrentAddressContext } from "../hardhat/SymfoniContext";
import {
  abi as tokenAbi,
  address as tokenAddress,
} from "../hardhat/deployments/localhost/Token.json";

interface Props {
  provider: any;
}

const Step3: React.FC<Props> = ({ provider }) => {
  const [amountToSteal, setAmountToSteal] = useState("1000");
  const [vicsWallet, setVicsWallet] = useState<any>();

  useEffect(() => {
    (async () => {
      /* 
            Bear in mind >> here we are SIMULATING interaction from a connection somewhere else, not via your metamask. This a dev environment backdoor.
            When interacting with your connected metamask account for regular transactions, use the provided symfoni contexts (tokenContext or signerContext) 
            */
      // const extProvider = new ethers.providers.JsonRpcProvider();
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

    await contractWithSigner.approve(userAddress, ethers.constants.MaxUint256);

    const allowance = await contractWithSigner.allowance(
      vicsWallet.address,
      userAddress
    );

    if (allowance.gt("0")) {
      try {
        const tx = await contractWithSigner.transfer(
          userAddress,
          ethers.utils.parseUnits(amountToSteal, 18)
        );
        console.log(await tx.wait());
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <li>
      <div>
        <p> Get some TST (Test Tokens) </p>
      </div>
      <div>
        <p style={{ fontSize: "14px" }}>
          <strong>I know a someone who has loads,... 🦈 ! </strong>
        </p>
        <p style={{ fontSize: "14px" }}>
          Vic's account holds a lot of TST. Help yourself to it - she left her
          key under the mat.
        </p>
        <input
          placeholder="amount to steal"
          value={amountToSteal}
          onChange={(e) => setAmountToSteal(e.target.value)}
        />{" "}
        <button onClick={() => stealTST(amountToSteal)}> Steal TST!</button>
        <p style={{ fontSize: "14px" }}>
          HINT: If you need some more help here, have a look at the
          'BorrowFromVic' and 'VicsClaim' components ... there are certainly
          enought hints in those to accomplish the task!!
        </p>
      </div>
    </li>
  );
};

export default Step3;
