import React, { useCallback, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { CurrentAddressContext, TokenContext } from "../hardhat/SymfoniContext";
import { parseBytes32String } from "@ethersproject/strings";

interface Props {
  provider: any;
  className?: string;
}

const Step4: React.FC<Props> = ({ provider, className }) => {
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
    <li className={className}>
      <div>
        <p className="text-base font-semibold">
          Showoff your stolen TST token balance:{" "}
        </p>
      </div>
      <div className="bg-white p-4 my-2 rounded-lg">
        <p className="text-gray-600 font-light text-sm">Balance</p>
        <p className="font-mono text-green-500 font-bold">
          {balanceLoading ? "..." : balance}
        </p>
      </div>

      <p className="text-sm mt-2">
        HINT: This one should be easy after the last. You should use the
        'tokenContext' here (which has wrapped all the ERC20 functionality).
      </p>
    </li>
  );
};

export default Step4;
