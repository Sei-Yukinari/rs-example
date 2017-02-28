import Abstract from './abstract';
import Rx from 'rx';

export default class Basic extends Abstract {
  exec() {
    const source = Rx.Observable.fromArray( this.array );
    console.log( `===basic===` );
    source.subscribe( x => console.log( x ) );
  }
  
}