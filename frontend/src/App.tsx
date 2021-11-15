import React from "react";
import "./index.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Greeter } from "./components/Greeter";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import { ethers } from "ethers";
import Introduction from "./components/Introduction";
const provider = new ethers.providers.JsonRpcProvider();

function App() {
  return (
    <Symfoni autoInit={true}>
      <div className="w-full bg-gray-100 font-sans">
        <div className="flex px-10 md:px-0 py-10 items-center justify-center max-w-xl mx-auto">
          <div>
            <h1 className="text-3xl font-black">
              Yield: UI Technical Assessment
            </h1>
            <Introduction />

            <ol className="list-decimal">
              <p className="mt-10 text-center text-gray-700">
                Working with ETH
              </p>
              <Step1 className="mt-4" provider={provider} />
              <Step2 className="mt-4" provider={provider} />

              <p className="mt-10 text-center text-gray-700">
                Working with ERC20 Tokens
              </p>
              <Step3 className="mt-4" provider={provider} />
              <Step4 className="mt-4" provider={provider} />
              <Step5 className="mt-4" />
              <Step6 className="mt-4" provider={provider} />

              <div>
                <p className="mt-10 mb-5 text-center text-gray-700">
                  In your comfort zone
                </p>
                <div className="text-sm">
                  <p className="mb-4">
                    This app is NOT particularily well made (and the storyline
                    is shoddy). Use whatever tools/packages you feel comfortable
                    with to shuffle things around, tidy things up, or show-off
                    your skills.
                  </p>
                  <li>
                    <p className="text-base font-semibold">
                      <strong>Optional:</strong> Make this page{" "}
                      <strong>nicer to look at</strong>{" "}
                    </p>
                  </li>
                  <li>
                    <p className="text-base font-semibold">
                      <strong>Optional:</strong> Make this test{" "}
                      <strong> nicer to work with</strong> for the next
                      potential candidate
                    </p>
                  </li>
                </div>
              </div>
            </ol>

            <div className="mt-10 text-sm">
              <p>When you feel like you have done, submit a PR. </p>
              <p className="mt-4">
                Thank you very much for taking this assessment. We appreciate
                your time, and welcome any feedback!
              </p>
            </div>

            <div className="mt-10 text-sm">
              <p>
                Here is an extra example of a contract, for reference purposes:
              </p>
              <Greeter></Greeter>
            </div>
          </div>
        </div>
      </div>
    </Symfoni>
  );
}

export default App;
