# Are Shallow Equal

Check if two values are shallowly equal to each other.

## Install

```sh
npm install are-shallow-equal
```

## Usage

```ts
import areShallowEqual from 'are-shallow-equal';

// Let's compare two values for shallow equality

areShallowEqual ( 123, 123 ); // true
areShallowEqual ( { foo: 1 }, { foo: 1 } ); // true
areShallowEqual ( [1, 2, 3], [1, 2, 3] ); // true

areShallowEqual ( 123, 456 ); // false
areShallowEqual ( { foo: 1 }, { foo: 2 } ); // false
areShallowEqual ( [1, 2, 3], [1, 2] ); // false
```

## License

MIT © Fabio Spampinato
