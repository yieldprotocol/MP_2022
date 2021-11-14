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

const Step4: React.FC<Props> = ({ provider }) => {
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
      <p>
        Cover your tracks! Make this <button> button </button> transfer{" "}
        <input /> of the Test token (TST) from your account to another account:
        <input /> .
      </p>
      <p style={{ fontSize: "14px" }}>HINT: Use the 'tokenContext' here too!</p>
    </li>
  );
};

export default Step4;
