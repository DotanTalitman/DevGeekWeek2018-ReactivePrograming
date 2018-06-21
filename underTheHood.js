class Observable {

  constructor(subscribe) {
    this.subscribe = subscribe;
  }

  static fromEvent(element, name) {
    return new Observable(observer => {
      const next = e => observer.next(e)
      element.addEventListener(name, next, false)
      return () => element.removeEventListener(name, next, false)
    })


  }

}

const input = Observable.fromEvent(document.querySelector('#myInput'), '#myInput');

input.subscribe({})