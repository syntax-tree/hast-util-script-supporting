# hast-util-script-supporting [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [node][] is a [**script-supporting**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-script-supporting
```

**hast-util-script-supporting** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var scriptSupporting = require('hast-util-script-supporting');
```

Given a non-script-supporting value:

```javascript
var result = scriptSupporting({
    'type': 'element',
    'tagName': 'a',
    'properties': {
        'href': '#alpha',
        'title': 'Bravo'
    },
    'children': [{
        'type': 'text',
        'value': 'Charlie'
    }]
});
```

Yields:

```js
false
```

Given a script-supporting element:

```javascript
result = scriptSupporting({
    'type': 'element',
    'tagName': 'template',
    'children': [{
        'type': 'text',
        'value': 'Delta'
    }]
});
```

Yields:

```js
true
```

## API

### `scriptSupporting(node)`

Check if the given value is a [**script-supporting**][spec] [element][].

**Parameters**: `node` (`*`) — Value to check.

**Returns**: `boolean`, whether `node` passes the test.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-script-supporting.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-script-supporting

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-script-supporting.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-script-supporting?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/hast-util-script-supporting/releases

[license]: LICENSE

[author]: http://wooorm.com

[node]: https://github.com/wooorm/hast#node

[element]: https://github.com/wooorm/hast#element

[spec]: https://html.spec.whatwg.org/#script-supporting-elements
