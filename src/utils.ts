/* MAIN */

const {isArray} = Array;

const isObject = ( value: unknown ): boolean => {

  return typeof value === 'object' && value !== null;

};

const isStrictlyEqual = ( x: unknown, y: unknown ): boolean => {

  return ( x === y ) || ( x !== x && y !== y );

};

// Backward compatibility: keep misspelled export as alias
const isStriclyEqual = isStrictlyEqual;

/* EXPORT */

export {isArray, isObject, isStrictlyEqual, isStriclyEqual};
