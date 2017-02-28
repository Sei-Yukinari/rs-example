import Rx from 'rx';

export default class Abstract {
  constructor() {
    if ( new.target === Abstract ) {
      throw new TypeError( "Cannot construct Abstract instances directly" );
    }
    if ( this.exec === undefined ) {
      throw new TypeError( "Must override exec" );
    }
    if ( this.writeHeader === undefined ) {
      throw new TypeError( "Must override writeHeader" );
    }
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.source = Rx.Observable.fromArray( array );
  }
}