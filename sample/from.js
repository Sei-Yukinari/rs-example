import Rx from 'rx';
import Abstract from './abstract';

export default class From extends Abstract {

  writeHeader() {
    console.log('===from===');
  }

  exec() {
    this.writeHeader();
    Rx.Observable
        .from('xyz')
        .subscribe(
            value => console.log(`onNext: ${value}`),
            error => console.log(`onError: ${error}`),
            () => console.log('onCompleted'),
        );
  }
}
