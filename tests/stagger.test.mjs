import test from 'node:test';
import assert from 'node:assert/strict';
import { staggerDelay, STAGGER_MAX_MS } from '../js/stagger.js';

test('first element in a batch has no delay', () => {
  assert.equal(staggerDelay(0), 0);
});

test('delay grows by the step within a batch', () => {
  assert.equal(staggerDelay(1), 40);
  assert.equal(staggerDelay(2), 80);
});

test('delay is capped regardless of batch position', () => {
  assert.equal(staggerDelay(50), STAGGER_MAX_MS);
  assert.equal(staggerDelay(1000), STAGGER_MAX_MS);
});

test('negative positions are treated as zero', () => {
  assert.equal(staggerDelay(-3), 0);
});

test('delay plus 0.3s transition stays within 0.4s', () => {
  assert.ok(STAGGER_MAX_MS + 300 <= 400);
});
