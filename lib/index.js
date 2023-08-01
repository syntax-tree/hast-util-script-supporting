import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is a script-supporting element.
 *
 * @param value
 *   Thing to check (typically `Node`).
 * @returns
 *   Whether `value` is a script-supporting element.
 *
 *   The elements `script` and `template` are script-supporting.
 */
export const scriptSupporting = convertElement(['script', 'template'])
