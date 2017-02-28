export default class Abstract {
  constructor() {
    if ( new.target === Abstract ) {
      throw new TypeError( "Cannot construct Abstract instances directly" );
    }
    if ( this.exec === undefined ) {
      throw new TypeError( "Must override exec" );
    }
    this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
}