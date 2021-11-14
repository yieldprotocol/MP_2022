import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import {
  CurrentAddressContext,
  SignerContext,
} from "../hardhat/SymfoniContext";
import Address from "./Address";

interface Props {
  provider: any;
}

const Step1: React.FC<Props> = ({ provider }) => {
  const addressContext = useContext<any>(CurrentAddressContext);

  /* HINT: this is how to bring in the signerContext */
  const [signer] = useContext(SignerContext);

  const [balance, setBalance] = useState<any>(null);
  const [balanceLoading, setBalanceLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // TODO: trigger this to run every 10 sec
      setBalanceLoading(true);
      const balance = await signer?.getBalance();
      setBalance(balance ? ethers.utils.formatEther(balance) : null);
      setBalanceLoading(false);
    })();
  }, [addressContext]);

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
    <li>
      <div>
        <div>
          <p>
            {" "}
            Create a new React component to show the account name and ETH
            balance of the connected wallet.{" "}
          </p>
        </div>
        <div
          style={{
            alignContent: "flex-end",
            border: "2px solid white",
          }}
        >
          <div>
            <p>Balance: {balanceLoading ? "..." : balance?.toString()}</p>
            <p>
              Address:{" "}
              <Address address={addressContext[0]} truncateAmount={7} />{" "}
              {humanName ? ` (${humanName})` : ""}
            </p>
          </div>
        </div>
      </div>
      <p style={{ fontSize: "14px" }}>
        {" "}
        (human readable, and dynamically changing would be nice){" "}
      </p>
    </li>
  );
};

export default Step1;
