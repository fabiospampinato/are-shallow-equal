
/* MAIN */

const NOPE = [
  [null, undefined],
  [0, NaN],
  [123, 1],
  [123n, 1n],
  [123, 123n],
  ['foo', 'bar'],
  [Symbol (), Symbol ()],
  [{ foo: undefined }, {}],
  [{}, { foo: undefined }],
  [{ foo: 1 }, {}],
  [{}, { foo: 1 }],
  [[1, 3], [1, 2]],
  [[1, 2], [1, 2, 3]],
  [[].forEach, [].map]
];

const YEP = [
  [null, null],
  [undefined, undefined],
  [0, -0],
  [[0], [-0]],
  [NaN, NaN],
  [[NaN], [NaN]],
  [123, 123],
  [123n, 123n],
  ['foo', 'foo'],
  [Symbol.iterator, Symbol.iterator],
  [{}, []],
  [[], {}],
  [{ foo: NaN }, { foo: NaN }],
  [{ foo: 1, bar: 2, }, { foo: 1, bar: 2 }],
  [{ bar: 1, foo: 2, }, { bar: 1, foo: 2 }],
  [[1, 2, 3], [1, 2, 3]],
  [[].forEach, [].forEach]
];

/* EXPORT */

export {NOPE, YEP};
