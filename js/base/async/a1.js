// 模拟获取数据
function getData() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("loading");
            resolve("data");
        }, 2000);
    })
}

async function login() {
    console.log("start");
    //await 表示会等getData()promise成功resolve之后再执行。
    let data = await getData();
    console.log(data);
    console.log("end");
}

console.log(login());
// start
// Promise { <pending> }
// loading
// data
// end