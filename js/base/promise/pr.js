function greet() {
    return new Promise(function (resolve, reject) {
        let greet = "hello  world";
        resolve(greet);
    });

}

let p = greet();
p.then(v => {
    console.log(a)
    console.log(v + 1);
    return v;
})
    .then(v => {
        console.log(v + 2);
        return v;
    })
    .then(v => {
        console.log(v + 3);
    });
