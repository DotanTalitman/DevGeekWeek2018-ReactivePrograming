
import {Observable,interval} from "rxjs"
import { map,take} from "rxjs/operators"
let array = ["1", 4, 6, "hi", 8, 7, "4", 5, "foo", 7, 3, 6];

const source = interval(500).pipe(take(3),map(num=>num*2))

source.subscribe(x=> console.log(x))

var observable = new Observable(observer=> observer.next("hello"));





