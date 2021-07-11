require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const your_private_key = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
 module.exports = {
  solidity: "0.8.3",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    goli: {
      url: "https://goerli.infura.io/v3/fd78f376e590467eb67c614cd3170a8a",
      accounts: [`0x${your_private_key}`]
    },
    ryby: {
      url: "https://rinkeby.infura.io/v3/fd78f376e590467eb67c614cd3170a8a",
      accounts: [`0x${your_private_key}`]

    }
  }
};
