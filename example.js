// Dependencies:
var scriptSupporting = require('./index.js');

// Given a non-script-supporting value:
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

// Yields:
console.log('js', String(result));

// Given a script-supporting element:
result = scriptSupporting({
    'type': 'element',
    'tagName': 'template',
    'children': [{
        'type': 'text',
        'value': 'Delta'
    }]
});

// Yields:
console.log('js', String(result));
