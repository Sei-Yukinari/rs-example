import Abstract from './abstract';

export default class Filter extends Abstract {
  
  writeHeader() {
    console.log( `===filter===` );
  }

  exec() {
    this.writeHeader();
    this.source
        .filter( x => x % 3 === 0 )
        .subscribe( x=> console.log( x ) );
  }
}