import {convertElement} from 'hast-util-is-element'

/* Check if a node is a script-supporting element */
export const scriptSupporting = convertElement(['script', 'template'])
