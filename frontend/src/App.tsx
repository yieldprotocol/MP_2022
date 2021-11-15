import React, { useContext } from "react";
import "./index.css";
import "./App.css";
import { Symfoni, SignerContext } from "./hardhat/SymfoniContext";
import { Greeter } from "./components/Greeter";
import { BorrowFromVic } from "./components/BorrowFromVic";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider();

function App() {
  return (
    <div className="w-full bg-gray-100">
      <header className="App-header">
        <Symfoni autoInit={true}>
          <div>
            <div>
              <p>Yield: UI Technical Assessment</p>
            </div>

            <div className="section">
              <p>Briefing:</p>
              <p>
                This assessment requires you to create{" "}
                <a href="https://reactjs.org/" target="_blank">
                  React{" "}
                </a>{" "}
                elements that interact with the{" "}
                <a href="https://ethereum.org/en/" target="_blank">
                  Ethereum
                </a>{" "}
                blockchain. We know that some of this may be new to you, and
                there are things here that you may not currently understand very
                well. That's ok. Part of the purpose of this technical
                assessment is to see how well you use <em>us</em> as a resource
                to help you get work done by asking us questions. Once complete,
                this single page app should connect with a local blockchain
                implementation, receive and send ETH, and interact with a
                predeployed{" "}
                <a href="https://eips.ethereum.org/EIPS/eip-20" target="_blank">
                  ERC20
                </a>{" "}
                contract, TST.
              </p>
              <p>
                A{" "}
                <a href="https://hardhat.org/" target="_blank">
                  Hardhat
                </a>{" "}
                implementation is 'pre-setup'. Run it in the background with
                with: <code> npx hardhat node --watch </code>.
              </p>
              <p>
                Also, make sure you have{" "}
                <a href="https://metamask.io/" target="_blank">
                  Metamask
                </a>{" "}
                installed in your browser.
              </p>

              <div className="section">
                <BorrowFromVic />
              </div>

              <p>
                If all is running fine at this point, the above button will
                short-circuit the system and credit the connected metamask
                account with <strong>1.5ETH</strong>. This should help you get
                going with the rest of the tasks.
              </p>
              <p>
                HINT: Make sure metamask is connected to the 'custom RPC
                network' with port 31337.
              </p>
            </div>

            <ol>
              <div className="">
                Working with ETH:
                <Step1 provider={provider} />
                <Step2 provider={provider} />
              </div>

              <div className="">
                Working with ERC20 Tokens:
                <Step3 provider={provider} />
                <Step4 provider={provider} />
                <Step5 />
                <Step6 provider={provider} />
              </div>

              <div className="">
                In your comfort zone:
                <p>
                  This app is NOT particularily well made (and the storyline is
                  shoddy). Use whatever tools/packages you feel comfortable with
                  to shuffle things around, tidy things up, or show-off your
                  skills.
                </p>
                <li>
                  <p>
                    <strong>Optional:</strong> Make this page{" "}
                    <strong>nicer to look at</strong>{" "}
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Optional:</strong> Make this test{" "}
                    <strong> nicer to work with</strong> for the next potential
                    candidate
                  </p>
                </li>
              </div>
            </ol>

            <div className="">
              <p>When you feel like you have done, submit a PR. </p>
              <p>
                Thank you very much for taking this assessment. We appreciate
                your time, and welcome any feedback!
              </p>
            </div>

            <div className="">
              <p>
                Here is an extra example of a contract, for reference purposes:
              </p>
              <Greeter></Greeter>
            </div>
          </div>
        </Symfoni>
      </header>
    </div>
  );
}

export default App;
