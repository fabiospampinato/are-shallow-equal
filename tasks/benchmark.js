
/* IMPORT */

import benchmark from 'benchloop';
import areShallowEqual from '../dist/index.js';
import {NOPE, YEP} from '../test/fixtures.js';

/* MAIN */

benchmark ({
  'name': 'are-shallow-equal',
  iterations: 100_000,
  fn: () => {
    for ( const [a, b] of NOPE ) {
      areShallowEqual ( a, b );
    }
    for ( const [a, b] of YEP ) {
      areShallowEqual ( a, b );
    }
  }
});
