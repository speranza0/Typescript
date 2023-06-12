/**
 * Generic in Promise
 */
const atferTwoSeconds = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });
};

const runner = async function () {
  const res = await atferTwoSeconds();
  console.log(res);
};

runner();

const atferOneSecond = function (): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
};

const runner2 = async function () {
  const res = await atferOneSecond();
  console.log(res);
};

runner2;

const runner3 = async function () {
  return "string return";
};
