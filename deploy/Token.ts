import { HardhatRuntimeEnvironment } from "hardhat/types";

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId,
    getUnnamedAccounts,
  }: HardhatRuntimeEnvironment) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
  
      await deploy("Token", {
        from: deployer,
        args: ['TestToken', 'TST', '1000000000000000000000000' ],
      });
  };
  