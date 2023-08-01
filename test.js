import assert from 'node:assert/strict'
import test from 'node:test'
import {scriptSupporting} from './index.js'

test('scriptSupporting', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'scriptSupporting'
    ])
  })

  await t.test('should return `false` without node', async function () {
    // @ts-expect-error `node` should be given.
    assert.equal(scriptSupporting(), false)
  })

  await t.test('should return `false` with `null`', async function () {
    assert.equal(scriptSupporting(null), false)
  })

  await t.test(
    'should return `false` when without `element`',
    async function () {
      assert.equal(scriptSupporting({type: 'text'}), false)
    }
  )

  await t.test(
    'should return `false` when with invalid `element`',
    async function () {
      assert.equal(scriptSupporting({type: 'element'}), false)
    }
  )

  await t.test(
    'should return `false` when without not script-supporting',
    async function () {
      assert.equal(
        scriptSupporting({
          type: 'element',
          tagName: 'a',
          properties: {href: '#alpha', title: 'Bravo'},
          children: [{type: 'text', value: 'Charlie'}]
        }),
        false
      )
    }
  )

  await t.test(
    'should return `true` when with script-supporting',
    async function () {
      assert.equal(
        scriptSupporting({
          type: 'element',
          tagName: 'template',
          children: [{type: 'text', value: 'Delta'}]
        }),
        true
      )
    }
  )
})
