# hast-util-script-supporting [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [HAST node][hast] is a [**script-supporting**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-script-supporting
```

## Usage

```javascript
var scriptSupporting = require('hast-util-script-supporting');

scriptSupporting({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha', title: 'Bravo'},
  children: [{type: 'text', value: 'Charlie'}]
}); //=> false

scriptSupporting({
  type: 'element',
  tagName: 'template',
  children: [{type: 'text', value: 'Delta'}]
}); //=> true
```

## API

### `scriptSupporting(node)`

Check if the given value is a [**script-supporting**][spec] [element][].

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-script-supporting.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-script-supporting

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-script-supporting.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-script-supporting?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/wooorm/hast

[element]: https://github.com/wooorm/hast#element

[spec]: https://html.spec.whatwg.org/#script-supporting-elements
