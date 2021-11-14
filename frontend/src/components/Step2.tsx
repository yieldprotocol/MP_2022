import React, { useContext, useState } from "react";
import { ethers } from "ethers";
import { SignerContext } from "../hardhat/SymfoniContext";

interface Props {
  provider: any;
}

const Step2: React.FC<Props> = ({ provider }) => {
  const [addressToSendTo, setAddressToSendTo] = useState(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );

  const [signer] = useContext(SignerContext);

  const sendToAddress = async () => {
    await signer?.sendTransaction({
      to: addressToSendTo,
      value: ethers.utils.parseEther("1.25"),
    });
  };

  return (
    <li>
      <p>
        Make this
        <button onClick={() => sendToAddress()}>Button </button>
        send <strong>1.25 </strong> ETH (or a variable amount) from your
        connected account to another address:{" "}
        <input
          value={addressToSendTo}
          onChange={(e) => setAddressToSendTo(e.target.value)}
        />
        .
      </p>
      <p style={{ fontSize: "14px" }}>
        (It might be a good idea to pay Vic back?! )
      </p>

      <p style={{ fontSize: "14px" }}>
        HINT: all the account info/functions you need for these first two tasks
        are in the <em>signerContext </em>( It might also be easier to break
        each task out into a new component).
      </p>
    </li>
  );
};

export default Step2;
