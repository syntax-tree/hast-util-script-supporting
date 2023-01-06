/**
 * @typedef {import('hast').Element} Element
 */

/**
 * @typedef {import('hast-util-is-element').AssertPredicate<Element & {tagName: 'script' | 'template'}>} AssertScriptOrTemplate
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is a script-supporting element.
 *
 * @type {AssertScriptOrTemplate}
 * @param value
 *   Thing to check (typically `Node`).
 * @returns
 *   Whether `value` is a script-supporting element.
 *
 *   The elements `script` and `template` are script-supporting.
 */
// @ts-expect-error Sure, the assertion matches.
export const scriptSupporting = convertElement(['script', 'template'])
