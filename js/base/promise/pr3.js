function greet() {
  return new Promise(function (resolve, reject) {
    let greet = "hello  world";
    if (greet === "") {
      resolve(greet);
    } else {
      reject(greet)
    }
  });

}

let p = greet();

p.then(v => {
    console.log(v + " resolve");
    return v;
  },
  v => {
    console.log(v + " reject");
    return v
  },
);
