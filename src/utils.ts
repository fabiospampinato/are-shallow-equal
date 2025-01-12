
/* MAIN */

const {isArray} = Array;

const isObject = ( value: unknown ): boolean => {

  return typeof value === 'object' && value !== null;

};

const isStriclyEqual = ( x: unknown, y: unknown ): boolean => {

  return ( x === y ) || ( x !== x && y !== y );

};

/* EXPORT */

export {isArray, isObject, isStriclyEqual};
