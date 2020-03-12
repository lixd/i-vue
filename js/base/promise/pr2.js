function greet() {
  let promise = new Promise(function (resolve, reject) {
    let greet = "hello  world";
    resolve(greet);
  });
  return promise;
}

let p = greet().then(v => {
  console.log(v);
});

console.log(p);
