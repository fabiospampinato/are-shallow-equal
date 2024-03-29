
/* IMPORT */

import {isNaN, isPrimitive} from './utils';

/* MAIN */

const areShallowEqual = ( x: any, y: any ): boolean => {

  if ( x === y ) return true;

  if ( isNaN ( x ) ) return isNaN ( y );

  if ( isPrimitive ( x ) || isPrimitive ( y ) ) return x === y;

  for ( const i in x ) if ( !( i in y ) ) return false;

  for ( const i in y ) if ( x[i] !== y[i] ) return false;

  return true;

};

/* EXPORT */

export default areShallowEqual;
