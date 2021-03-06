import { WHITESPACES } from '../helpers/constants';

QUnit.test('parseFloat', assert => {
  assert.isFunction(parseFloat);
  assert.name(parseFloat, 'parseFloat');
  assert.arity(parseFloat, 1);
  assert.looksNative(parseFloat);
  assert.same(parseFloat('0'), 0);
  assert.same(parseFloat(' 0'), 0);
  assert.same(parseFloat('+0'), 0);
  assert.same(parseFloat(' +0'), 0);
  assert.same(parseFloat('-0'), -0);
  assert.same(parseFloat(' -0'), -0);
  assert.same(parseFloat(`${ WHITESPACES }+0`), 0);
  assert.same(parseFloat(`${ WHITESPACES }-0`), -0);
  assert.same(parseFloat(null), NaN);
  assert.same(parseFloat(undefined), NaN);

  if (typeof Symbol === 'function' && !Symbol.sham) {
    assert.throws(() => parseFloat(Symbol()), 'throws on symbol argument');
    assert.throws(() => parseFloat(Object(Symbol())), 'throws on boxed symbol argument');
  }
});
