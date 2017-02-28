import Abstract from './abstract';
import Rx from 'rx';

export default class Filter extends Abstract {
  exec() {
    const source = Rx.Observable.fromArray( this.array );
    console.log( `===filter===` );
    source
        .filter( x => x % 3 === 0 )
        .subscribe( x=> console.log( x ) );
  }
}