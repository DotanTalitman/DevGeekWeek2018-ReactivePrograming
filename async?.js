
//import {Observable} from "rxjs"
const {Observable}= require("rxjs");


function sub(observer){
    observer.next("hello")
    observer.next("world")
}


let observable = Observable.create(sub);
observable.subscribe((x)=>console.log(x))

