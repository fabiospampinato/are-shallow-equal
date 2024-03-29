
/* IMPORT */

import {describe} from 'fava';
import areShallowEqual from '../dist/index.js';

/* MAIN */

describe ( 'areShallowEqual', it => {

  it ( 'works', t => {

    const nope = [
      [123, 1],
      [{}, { foo: 1 }],
      [[1, 3], [1, 2]]
    ];

    nope.forEach ( ([ x, y ]) => t.false ( areShallowEqual ( x, y ) ) );

    const yep = [
      [NaN, NaN],
      [123, 123],
      [{ foo: 1 }, { foo: 1 }],
      [[1, 2, 3], [1, 2, 3]]
    ];

    yep.forEach ( ([ x, y ]) => t.true ( areShallowEqual ( x, y ) ) );

  });

});
