import test from 'node:test';
import assert from 'node:assert/strict';
import { renderCert, safeCredentialUrl } from '../utils/cert-card.js';

const base = { provider: 'Snyk', name: 'Test Cert', date: '2026-11', expires: null };

test('cert with an https url renders as a new-tab link card', () => {
  const html = renderCert({ ...base, url: 'https://credentials.snyk.io/abc' });
  assert.match(html, /^\s*<a class="cert-card cert-card--link"/);
  assert.match(html, /href="https:\/\/credentials\.snyk\.io\/abc"/);
  assert.match(html, /target="_blank"/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.match(html, /<\/a>\s*$/);
});

test('cert without a url renders as a plain div', () => {
  const html = renderCert(base);
  assert.match(html, /^\s*<div class="cert-card"/);
  assert.doesNotMatch(html, /href=/);
  assert.doesNotMatch(html, /cert-card--link/);
});

test('unsafe or malformed urls fall back to a plain div', () => {
  for (const url of ['javascript:alert(1)', 'http://example.com', 'not a url', '', 42]) {
    const html = renderCert({ ...base, url });
    assert.doesNotMatch(html, /href=/, `url ${String(url)} should not render a link`);
  }
});

test('url attribute value is escaped', () => {
  assert.equal(safeCredentialUrl('https://x.test/"onmouseover="x'), 'https://x.test/%22onmouseover=%22x');
});

test('non-expiring cert shows "Does not expire" and Active', () => {
  const html = renderCert(base);
  assert.match(html, /Does not expire/);
  assert.match(html, /cert-status--active/);
});
