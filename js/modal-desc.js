export function renderDescBlock(block) {
  if (typeof block === 'string') return `<p>${block}</p>`;

  if (block.list) {
    const items = block.list.map(item => `<li>${item}</li>`).join('');
    return `<ul class="modal-desc-list">${items}</ul>`;
  }

  if (block.image) {
    const { src, alt = '', className = 'modal-image--full' } = block.image;
    return `<img src="${src}" alt="${alt}" class="modal-image ${className} modal-image--inline" loading="lazy" />`;
  }

  return '';
}
