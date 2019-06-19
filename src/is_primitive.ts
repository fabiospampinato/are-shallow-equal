
/* IS PRIMITIVE */

function isPrimitive ( x: any ): boolean {

  if ( typeof x === 'object' ) return x === null;

  return typeof x !== 'function';

}

/* EXPORT */

export default isPrimitive;
