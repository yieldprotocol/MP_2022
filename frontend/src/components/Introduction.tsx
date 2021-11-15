import React from "react";
import { BorrowFromVic } from "./BorrowFromVic";

const Introduction = () => {
  return (
    <div className="text-sm">
      <h2 className="text-lg font-bold pt-5">Briefing</h2>
      <p>
        This assessment requires you to create{" "}
        <a
          className="text-blue-800"
          href="https://reactjs.org/"
          target="_blank"
        >
          React{" "}
        </a>{" "}
        elements that interact with the{" "}
        <a
          className="text-blue-800"
          href="https://ethereum.org/en/"
          target="_blank"
        >
          Ethereum
        </a>{" "}
        blockchain. We know that some of this may be new to you, and there are
        things here that you may not currently understand very well. That's ok.
        Part of the purpose of this technical assessment is to see how well you
        use <em>us</em> as a resource to help you get work done by asking us
        questions. Once complete, this single page app should connect with a
        local blockchain implementation, receive and send ETH, and interact with
        a predeployed{" "}
        <a
          className="text-blue-800"
          href="https://eips.ethereum.org/EIPS/eip-20"
          target="_blank"
        >
          ERC20
        </a>{" "}
        contract, TST.
      </p>
      <p className="pt-4">
        A{" "}
        <a href="https://hardhat.org/" target="_blank">
          Hardhat
        </a>{" "}
        implementation is 'pre-setup'. Run it in the background with with:
      </p>
      <p className="pt-2">
        <code className="bg-gray-600 rounded-md px-3 py-2 font-mono text-green-400 font-light">
          {" "}
          npx hardhat node --watch
        </code>
      </p>
      <p className="pt-4">
        Also, make sure you have{" "}
        <a href="https://metamask.io/" target="_blank">
          Metamask
        </a>{" "}
        installed in your browser.
      </p>
      <div className="pt-4">
        <BorrowFromVic />
      </div>
      <p className="pt-4">
        If all is running fine at this point, the above button will
        short-circuit the system and credit the connected metamask account with{" "}
        <strong>1.5ETH</strong>. This should help you get going with the rest of
        the tasks.
      </p>
      <p className="pt-4">
        HINT: Make sure metamask is connected to the 'custom RPC network' with
        port 31337.
      </p>
    </div>
  );
};

export default Introduction;
