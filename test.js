/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast:util:script-supporting
 * @fileoverview Test suite for `script-supporting`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var scriptSupporting = require('./index.js');

/*
 * Tests.
 */

test('scriptSupporting', function (t) {
    t.equal(
        scriptSupporting(),
        false,
        'should return `false` without node'
    );

    t.equal(
        scriptSupporting(null),
        false,
        'should return `false` with `null`'
    );

    t.equal(
        scriptSupporting({
            'type': 'text'
        }),
        false,
        'should return `false` when without `element`'
    );

    t.equal(
        scriptSupporting({
            'type': 'element'
        }),
        false,
        'should return `false` when with invalid `element`'
    );

    t.equal(
        scriptSupporting({
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
        }),
        false,
        'should return `false` when without not script-supporting'
    );

    t.equal(
        scriptSupporting({
            'type': 'element',
            'tagName': 'template',
            'children': [{
                'type': 'text',
                'value': 'Delta'
            }]
        }),
        true,
        'should return `true` when with script-supporting'
    );

    t.end();
});
