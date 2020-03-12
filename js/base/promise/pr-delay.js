let i

let promise = new Promise(function (resolve, reject) {
  resolve("hello");
});

promise.then(data => {
  i = 2;
});
console.log(i); // undefined
setTimeout(() => console.log(i), 1000); // 2
