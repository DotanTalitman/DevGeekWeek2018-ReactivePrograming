class Observable {

    constructor(subscribe) {
        this.subscribe = subscribe;
    }
}

let asyncTask = new Observable(getData);
function getData(observer) {

    let func = () => {
        setTimeout(() => {
            observer.next({
                data: "this is a new data"
            })
        }, 2000)
    }
}

asyncTask.subscribe({
    next: (result) => console.log(result.data)
})