
/* IMPORT */

import {isArray, isObject, isStriclyEqual} from './utils';

/* MAIN */

const areShallowEqual = ( x: any, y: any ): boolean => {

  if ( isStriclyEqual ( x, y ) ) return true;

  if ( !isObject ( x ) || !isObject ( y ) ) return false;

  if ( isArray ( x ) && isArray ( y ) ) {

    if ( x.length !== y.length ) return false;

    for ( let i = 0, l = x.length; i < l; i++ ) {

      if ( !isStriclyEqual ( x[i], y[i] ) ) return false;

    }

  } else {

    for ( const key in x ) {

      if ( !( key in y ) ) return false;

      if ( !isStriclyEqual ( x[key], y[key] ) ) return false;

    }

    for ( const key in y ) {

      if ( !( key in x ) ) return false;

    }

  }

  return true;

};

/* EXPORT */

export default areShallowEqual;
