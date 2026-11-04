import test from 'node:test';
import assert from 'node:assert/strict';
import { renderDescBlock } from '../js/modal-desc.js';

test('string renders as a paragraph', () => {
  assert.equal(renderDescBlock('Hello <b>world</b>'), '<p>Hello <b>world</b></p>');
});

test('list renders one li per item', () => {
  const html = renderDescBlock({ list: ['one', 'two', 'three'] });
  assert.match(html, /^<ul class="modal-desc-list">/);
  assert.equal(html.match(/<li>/g).length, 3);
  assert.match(html, /<li>two<\/li>/);
});

test('image uses the given class and stays inline', () => {
  const html = renderDescBlock({ image: { src: './x.png', alt: 'X', className: 'modal-image--diagram' } });
  assert.match(html, /src="\.\/x\.png"/);
  assert.match(html, /alt="X"/);
  assert.match(html, /class="modal-image modal-image--diagram modal-image--inline"/);
});

test('image without a class defaults to full width', () => {
  const html = renderDescBlock({ image: { src: './x.png', alt: 'X' } });
  assert.match(html, /modal-image--full/);
});

test('unknown block renders nothing', () => {
  assert.equal(renderDescBlock({}), '');
});
