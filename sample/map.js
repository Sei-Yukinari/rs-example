import Abstract from './abstract';

export default class Map extends Abstract {

  writeHeader() {
    console.log( `===map===` );
  }

  exec() {
    this.writeHeader();
    this.source
        .map( x => {
              const ret = ["-", "いち", "に", "さん", "よん", "ご", "ろく", "なな", "はち", "きゅう", "じゅう"];
              return ret[x];
            }
        )
        .subscribe( x=> console.log( x ) );
  }
}