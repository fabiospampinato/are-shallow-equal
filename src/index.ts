
/* IMPORT */

import isPrimitive from 'is-primitive';

/* ARE SHALLOW EQUAL */

function areShallowEqual ( x: any, y: any ): boolean {

  if ( isPrimitive ( x ) || isPrimitive ( y ) ) return x === y;

  if ( x === y ) return true;
  for ( const i in x ) if ( !( i in y ) ) return false;
  for ( const i in y ) if ( x[i] !== y[i] ) return false;
  return true;

}

/* EXPORT */

export default areShallowEqual;
