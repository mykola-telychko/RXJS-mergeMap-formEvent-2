import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap
// Example 2: mergeMap with ajax observable

// free api url
const API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

// streams
const click$ = fromEvent(document, 'click');

click$
  .pipe(
    /*
     * Using mergeMap for example, but generally for GET requests
     * you will prefer switchMap.
     * Also, if you do not need the parameter like
     * below you could use mergeMapTo instead.
     * ex. mergeMapTo(ajax.getJSON(API_URL))
     */
    mergeMap(() => ajax.getJSON(API_URL))
  )
  .subscribe(console.log);
// { userId: 1, id: 1, ...}
