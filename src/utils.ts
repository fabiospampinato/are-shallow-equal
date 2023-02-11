
/* MAIN */

const isNaN = ( value: unknown ): boolean => {

  return value !== value;

};

const isPrimitive = ( value: unknown ): value is null | undefined | string | number | boolean | symbol | bigint => {

  if ( value === null ) return true;

  const type = typeof value;

  return type !== 'object' && type !== 'function';

};

/* EXPORT */

export {isNaN, isPrimitive};
