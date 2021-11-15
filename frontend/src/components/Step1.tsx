import { ethers } from "ethers";
import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  CurrentAddressContext,
  SignerContext,
} from "../hardhat/SymfoniContext";
import Address from "./Address";
import StepContent from "./StepContent";

interface Props {
  provider: any;
  className?: any;
}

const Step1: React.FC<Props> = ({ provider, className }) => {
  const addressContext = useContext<any>(CurrentAddressContext);

  /* HINT: this is how to bring in the signerContext */
  const [signer] = useContext(SignerContext);

  const [balance, setBalance] = useState<any>(null);
  const [balanceLoading, setBalanceLoading] = useState(true);

  const fetchBalance = useCallback(async () => {
    setBalanceLoading(true);
    const balance = await signer?.getBalance();
    setBalance(balance ? ethers.utils.formatEther(balance) : null);
    setBalanceLoading(false);
  }, []);

  useEffect(() => {
    fetchBalance();
  }, [addressContext]);

  useEffect(() => {
    provider.on("block", fetchBalance);
    return () => {
      provider.off("block", fetchBalance);
    };
  }, [fetchBalance]);

  const [humanName, setHumanName] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const address = addressContext[0];
      try {
        const ensName = await provider.lookupAddress(address);
        setHumanName(ensName);
      } catch (e) {
        console.error(e);
      }
    })();
  }, [addressContext]);

  return (
    <li className={className}>
      <div>
        <p className="text-base font-semibold">
          Create a new React component to show the account name and ETH balance
          of the connected wallet.
        </p>
      </div>
      <div className="bg-white p-4 my-2 rounded-lg flex flex-col">
        <span className="mb-4 bg-gray-200 px-2 py-1 rounded-lg">
          {/* <p className="text-gray-600 font-light text-sm">Address</p> */}
          <Address
            className="text-gray-500"
            address={addressContext[0]}
            truncateAmount={7}
          />{" "}
          {humanName ? ` (${humanName})` : ""}
        </span>
        <span>
          <p className="text-gray-600 font-light text-sm">Balance</p>
          <p className="font-mono text-green-500 font-bold">
            {balanceLoading ? "..." : balance?.toString()}
          </p>
        </span>
      </div>
      <p className="text-sm mt-2">
        (human readable, and dynamically changing would be nice){" "}
      </p>
    </li>
  );
};

export default Step1;
