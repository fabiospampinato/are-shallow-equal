
/* IMPORT */

import {describe} from 'fava';
import areShallowEqual from '../dist/index.js';
import {NOPE, YEP} from './fixtures.js';

/* MAIN */

describe ( 'areShallowEqual', it => {

  it ( 'works', t => {

    NOPE.forEach ( args => t.false ( areShallowEqual ( ...args ) ) );
    YEP.forEach ( args => t.true ( areShallowEqual ( ...args ) ) );

  });

});
