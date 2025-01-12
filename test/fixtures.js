
/* MAIN */

const NOPE = [
  [123, 1],
  [{}, { foo: 1 }],
  [[1, 3], [1, 2]]
];

const YEP = [
  [NaN, NaN],
  [123, 123],
  [{ foo: 1 }, { foo: 1 }],
  [[1, 2, 3], [1, 2, 3]]
];

/* EXPORT */

export {NOPE, YEP};
