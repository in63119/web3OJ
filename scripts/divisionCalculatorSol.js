// scripts/plusCalculatorSol.js
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function calculatorSol() {
  const [myAccount] = await ethers.getSigners();

  const MyDivisionCalculator = await ethers.getContractFactory(
    "MyDivisionCalculator"
  );
  const myDivisionCalculator = await MyDivisionCalculator.connect(
    myAccount
  ).deploy();
  await myDivisionCalculator.deployed();

  const instance = "0x44E614f732b5BeB2D18D26971065b46b1eE7edA9";
  const DivisionCalculatorProblem = await ethers.getContractFactory(
    "DivisionCalculatorProblem"
  );
  const divisionCalculatorProblem = DivisionCalculatorProblem.attach(instance);
  divisionCalculatorProblem
    .connect(myAccount)
    .setDivisionCalculator(myDivisionCalculator.address);
}

async function main() {
  calculatorSol();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
