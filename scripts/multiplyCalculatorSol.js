// scripts/plusCalculatorSol.js
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyMultiplicationCalculator = await ethers.getContractFactory(
    "MyMultiplicationCalculator"
  );
  const myMultiplicationCalculator = await MyMultiplicationCalculator.connect(
    myAccount
  ).deploy();
  await myMultiplicationCalculator.deployed();

  const instance = "0x6DbF8f98e829b8B1C7b0c0a45a1C11eA80Bc8831";
  const MultiplicationCalculatorProblem = await ethers.getContractFactory(
    "MultiplicationCalculatorProblem"
  );
  const multiplicationCalculatorProblem =
    MultiplicationCalculatorProblem.attach(instance);
  multiplicationCalculatorProblem
    .connect(myAccount)
    .setMultiplicationCalculator(myMultiplicationCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
