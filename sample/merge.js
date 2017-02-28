import Rx from 'rx';
import Abstract from './abstract';

export default class Merge extends Abstract {

  writeHeader() {
    console.log( `===merge===` );
  }

  exec() {
    this.writeHeader();
    const five = Rx.Observable.timer( 5000 ).map( "5秒" );
    const seven = Rx.Observable.timer( 7000 ).map( "7秒" );

    five.merge( seven ).subscribe( x=>console.log( x ) );
  }
}