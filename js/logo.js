import { html } from './html.js';

// KS Travel Hub logo from the approved Claude Design file (symbol + wordmark).
// variant: 'color' | 'reversed' | 'mono'.  size = font-size in px (symbol = 1em).
const SWATCH = {
  color:    { disc: '#1F2A6B', k: '#FFFFFF', arc: '#4FB0E6', name: '#1F2A6B', tag: '#59628F' },
  reversed: { disc: '#FFFFFF', k: '#1F2A6B', arc: '#4FB0E6', name: '#FFFFFF', tag: '#4FB0E6' },
  mono:     { disc: '#111111', k: '#FFFFFF', arc: '#FFFFFF', name: '#111111', tag: '#111111' },
};

export function logo(variant = 'color', size = 30, { symbolOnly = false } = {}) {
  const c = SWATCH[variant] || SWATCH.color;
  return html`<div style="display:inline-flex;align-items:center;gap:.28em;font-size:${size}px;line-height:1;vertical-align:middle">
    <svg width="1em" height="1em" viewBox="0 0 100 100" style="display:block;flex:none" role="img" aria-label="KS Travel Hub symbol">
      <circle cx="50" cy="50" r="47" fill="${c.disc}"></circle>
      <rect x="30" y="31" width="12" height="42" fill="${c.k}"></rect>
      <polygon points="42,49 60,31 75,31 42,65" fill="${c.k}"></polygon>
      <polygon points="48,59 57,49.5 77,73 62,73" fill="${c.k}"></polygon>
      <path d="M17 60 Q20 10 77 22" fill="none" stroke="${c.arc}" stroke-width="4" stroke-linecap="round" stroke-dasharray="0.01 7.6"></path>
      <circle cx="77" cy="22" r="4.6" fill="${c.arc}"></circle>
    </svg>
    ${symbolOnly ? '' : html`<div style="display:flex;flex-direction:column;gap:.12em;padding-top:.02em">
      <span style="font-family:'Bricolage Grotesque',sans-serif;font-weight:800;font-size:.43em;letter-spacing:.015em;line-height:1;white-space:nowrap;color:${c.name}">KS TRAVEL HUB</span>
      <span style="font-family:'Inter',sans-serif;font-weight:600;font-size:.142em;letter-spacing:.36em;line-height:1;white-space:nowrap;color:${c.tag}">TOURS &amp; PACKAGES</span>
    </div>`}
  </div>`;
}
