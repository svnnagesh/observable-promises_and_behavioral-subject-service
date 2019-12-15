import { Injectable } from '@angular/core';
import 'rxjs';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesServiceService {

  constructor() { 
    console.log('Observables Service');
    this.promiseEx();
    this.observableEx();
    this.promiseEx2();
    this.observableEx2();

  }
  
  promiseEx() {
    //promise
    const promise = new Promise((resolve, reject)=> {
      const value = Math.random();
      if(value <= 1/3.0) {
        resolve(value)
      } else if(value <= 2/3.0) {
        reject("value <= 2/3.0")
      } else {
        throw "value <= 2/3 (throw)"
      }
    })
    //promise usage
    promise.then(value => console.log('got value ' + value)).catch(err=> console.log('got error ' + err));
  }

  //promise 2
  promiseEx2() {
    const promise = new Promise(resolve => {
      resolve(1);
      resolve(2);
      resolve(3);
    });
    promise.then(result => console.log(result));
  }

  //observable
  observableEx() {
    const observable = new Observable(observer=> {
      const value = Math.random();
      if(value <= 1) {
        observer.next(value)
      } else if(value > 2) {
        observer.error('errorrrr ' + value);
      } else {
        throw "value throw";
        observer.complete()
      }
    })
    observable.subscribe({
      next(value) { console.log('got value ' + value) },
      error(err) { console.log('got error ' + err) },
      complete() { console.log('completed') }
    })
  }
  
  //observable ex 2
  observableEx2() {
    const observable = new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
    });
    observable.subscribe(result => console.log(result));
  }

}
