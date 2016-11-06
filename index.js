'use strict';

/* Expose. */
module.exports = scriptSupporting;

/* Dependencies. */
var is = require('hast-util-is-element');

/* Tag-names. */
var names = [
  'script',
  'template'
];

/* Check if a node is a script-supporting element */
function scriptSupporting(node) {
  return is(node, names);
}
