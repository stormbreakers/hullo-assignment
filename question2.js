let inputs = [5, 10, 15, 20];

function map(x, callback) {
  setTimeout(function () {
    callback(x + 5);
  }, Math.floor(Math.random() * 1000));
}

const outputPromiseArray = inputs.map(val => {
  return new Promise((resolve, reject) => {
    map(val, (msg) => {
      resolve(msg);
    });
  });
});

(async () => {
  try {
    const output = await Promise.all(outputPromiseArray);
    console.log(output);
  } catch (err) {
    throw err;
  }
})();

