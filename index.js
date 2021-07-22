/**
 * @typedef {import('hast').Element & {tagName: 'script'|'template'}} ScriptOrTemplate
 * @typedef {import('hast-util-is-element').AssertPredicate<ScriptOrTemplate>} AssertScriptOrTemplate
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is a script-supporting element.
 * @type {AssertScriptOrTemplate}
 */
// @ts-expect-error Sure, the assertion matches.
export const scriptSupporting = convertElement(['script', 'template'])
