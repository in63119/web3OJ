const shell = require("shelljs");

// 제출할 파일
const problem = "divisionCalculatorSol.js";
const submitScript = `npx hardhat --network goerli run scripts/${problem}`;

const submit = async () => {
  console.log(" -------------- 문제를 제출합니다. --------------");

  try {
    await shell.exec(submitScript);

    console.log(" -------------- 제출을 완료하였습니다. --------------");
  } catch (err) {
    console.log(" -------------- 제출에 실패하였습니다. --------------");
    console.log(err);
  }
};

submit();
