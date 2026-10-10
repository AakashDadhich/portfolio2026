import test from 'node:test';
import assert from 'node:assert/strict';
import { staggerDelay, STAGGER_MAX_MS, STAGGER_STEP_MS, SEQ_STEP_MS, SEQ_MAX_MS, seqDelay } from '../js/stagger.js';

test('first element in a batch has no delay', () => {
  assert.equal(staggerDelay(0), 0);
});

test('delay grows by the step within a batch', () => {
  assert.equal(staggerDelay(1), STAGGER_STEP_MS);
  assert.equal(staggerDelay(2), STAGGER_STEP_MS * 2);
});

test('delay is capped regardless of batch position', () => {
  assert.equal(staggerDelay(50), STAGGER_MAX_MS);
  assert.equal(staggerDelay(1000), STAGGER_MAX_MS);
});

test('negative positions are treated as zero', () => {
  assert.equal(staggerDelay(-3), 0);
});

test('delay plus 0.35s transition stays under 0.5s', () => {
  assert.ok(STAGGER_MAX_MS + 350 < 500);
});

test('seqDelay steps tightly and caps for long cards', () => {
  assert.equal(seqDelay(0), 0);
  assert.equal(seqDelay(2), SEQ_STEP_MS * 2);
  assert.equal(seqDelay(500), SEQ_MAX_MS);
});
