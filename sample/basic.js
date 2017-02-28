import Abstract from './abstract';

export default class Basic extends Abstract {

  writeHeader() {
    console.log( `===basic===` );
  }

  exec() {
    this.writeHeader();
    this.source.subscribe( x => console.log( x ) );
  }
}