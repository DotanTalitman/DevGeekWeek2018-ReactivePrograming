// class Promise{

//     then(callback){
//         var data ="data fom ajax..."
//         callback(data);
//     }

// }

class Promise {

    constructor(then) {
        this.then = then;
    }

}

// var ajaxData = new Promise((cb)=>{

//     setTimeout(()=>{
//         cb("fakeAsyncData")
//     },2000)
// });


var ajaxData = new Promise((resolve) => {

    setTimeout(() => {
        return resolve("fakeAsyncData")
    }, 2000)


});

ajaxData.then((result) => {
    console.log("1 " + result)

})
console.log(ajaxData)