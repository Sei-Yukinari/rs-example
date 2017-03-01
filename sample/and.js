import Rx from 'rx';
import Abstract from './abstract';

export default class And extends Abstract {

  writeHeader(){
    console.log('===and===');
  }

  exec(){
    this.writeHeader();

    const observableA = Rx.Observable.interval(1000).take(5);
    const observableB = Rx.Observable.interval(2000).take(5);
    const observableC = Rx.Observable.interval(3000).take(5);

    const pattern = observableA
        .and(observableB)
        .and(observableC)
        .thenDo((x, y, z) =>{
          console.log(x);
          console.log(y);
          console.log(z);
          return '3つ';
        });

    Rx.Observable
        .when(pattern)
        .subscribe(x => console.log(x));
  }
}