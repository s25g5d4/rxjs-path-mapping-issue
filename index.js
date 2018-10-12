import { Observable } from 'rxjs/Observable';
import { Observable as Observable2 } from 'rxjs';
import 'rxjs/add/observable/of';

console.assert(typeof Observable.of === 'function', 'Observable.of from `rxjs/Observable` is not a function');
console.assert(typeof Observable2.of === 'function', 'Observable.of from `rxjs` is not a function');
