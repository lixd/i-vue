function greet1() {
  return new Promise(function (resolve, reject) {
    console.log("func1执行中...");
    resolve("func1执行完成");
  });
}

function greet2() {
  return new Promise(function (resolve, reject) {
    console.log("func2执行中1...");
    setTimeout(() => {
      console.log("func2执行中2...");
      resolve("func2执行完成");
    }, 2000);
  });
}

function greet3() {
  return new Promise(function (resolve, reject) {
    console.log("func3执行中...");
    resolve("func3执行完成");
  });
}
//全完成才执行then
// Promise.all([greet1(), greet2(), greet3()]).then(value => {
//   console.log(value)
// });

// 有一个完成就执行then
Promise.race([greet1(), greet2(), greet3()]).then(value => {
  console.log(value)
});
