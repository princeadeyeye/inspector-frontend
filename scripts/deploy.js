const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, World!");

  const Investigation = await hre.ethers.getContractFactory("Investigation");
  const investigation = await Investigation.deploy("Adeyeye Muiz Investigation Contract");

  await greeter.deployed();
  await investigation.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Investigation deployed to:", investigation.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });