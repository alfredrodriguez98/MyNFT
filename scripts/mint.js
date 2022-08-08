// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.attach(
    "0x0FAD2F2059963Bfc25D62c05168646bF88C59A21"
  );
  await myNFT.mintNFT("0x8bb47b7c3a5485cad8a0df843aef3a8f545b83fd", "1");

  //console.log("My NFT deployed successfully:", myNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
