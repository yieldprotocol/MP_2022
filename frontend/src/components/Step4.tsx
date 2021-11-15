import React, { useCallback, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { CurrentAddressContext, TokenContext } from "../hardhat/SymfoniContext";

interface Props {
  provider: any;
}

const Step4: React.FC<Props> = ({ provider }) => {
  const [userAddress] = useContext(CurrentAddressContext);

  const [balance, setBalance] = useState<any>(null);
  const [balanceLoading, setBalanceLoading] = useState(true);

  const token = useContext<any>(TokenContext);

  const fetchBalance = useCallback(async () => {
    setBalanceLoading(true);
    if (token?.instance) {
      const balance = await token.instance.balanceOf(userAddress);
      const balanceFormatted = ethers.utils.formatUnits(balance.toString());
      setBalance(balanceFormatted.toString());
      setBalanceLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBalance();
  }, []);

  useEffect(() => {
    provider.on("block", fetchBalance);
    return () => {
      provider.off("block", fetchBalance);
    };
  }, [fetchBalance]);

  return (
    <li>
      <div>
        <p> Showoff your stolen TST token balance: </p>
      </div>
      <div
        style={{
          alignContent: "flex-end",
          border: "2px solid white",
        }}
      >
        <p>Balance: {balanceLoading ? "..." : balance}</p>
      </div>

      <p style={{ fontSize: "14px" }}>
        HINT: This one should be easy after the last. You should use the
        'tokenContext' here ( which has wrapped all the ERC20 functionality ).
      </p>
    </li>
  );
};

export default Step4;
