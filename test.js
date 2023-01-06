import assert from 'node:assert/strict'
import test from 'node:test'
import {scriptSupporting} from './index.js'

test('scriptSupporting', () => {
  assert.equal(scriptSupporting(), false, 'should return `false` without node')

  assert.equal(
    scriptSupporting(null),
    false,
    'should return `false` with `null`'
  )

  assert.equal(
    scriptSupporting({type: 'text'}),
    false,
    'should return `false` when without `element`'
  )

  assert.equal(
    scriptSupporting({type: 'element'}),
    false,
    'should return `false` when with invalid `element`'
  )

  assert.equal(
    scriptSupporting({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha', title: 'Bravo'},
      children: [{type: 'text', value: 'Charlie'}]
    }),
    false,
    'should return `false` when without not script-supporting'
  )

  assert.equal(
    scriptSupporting({
      type: 'element',
      tagName: 'template',
      children: [{type: 'text', value: 'Delta'}]
    }),
    true,
    'should return `true` when with script-supporting'
  )
})
