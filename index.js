/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype:lint:util:script-supporting
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var is = require('hast-util-is-element');

/*
 * Tag-names.
 */

var names = [
    'script',
    'template'
];

/**
 * Check if a node is a script-supporting element
 *
 * @param {*} node - Thing to check.
 * @return {boolean} - Whether a node is script-supporting.
 */
function scriptSupporting(node) {
    return is(node, names);
}

/*
 * Expose.
 */

module.exports = scriptSupporting;
