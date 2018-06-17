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

## Contribute

See [`contributing.md` in `syntax-tree/hast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-script-supporting.svg

[build-page]: https://travis-ci.org/syntax-tree/hast-util-script-supporting

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-script-supporting.svg

[coverage-page]: https://codecov.io/github/syntax-tree/hast-util-script-supporting?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[hast]: https://github.com/syntax-tree/hast

[element]: https://github.com/syntax-tree/hast#element

[spec]: https://html.spec.whatwg.org/#script-supporting-elements

[contributing]: https://github.com/syntax-tree/hast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/hast/blob/master/code-of-conduct.md
