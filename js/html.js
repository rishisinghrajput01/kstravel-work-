// Tiny safe-HTML template helper. Every interpolated value is escaped unless it is
// the result of another html`` call (or wrapped in raw()). This keeps guest names,
// addresses etc. from breaking the page or injecting markup.
class Raw { constructor(s) { this.s = s; } toString() { return this.s; } }

export const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const raw = (s) => new Raw(String(s ?? ''));

const val = (v) => {
  if (v instanceof Raw) return v.s;
  if (Array.isArray(v)) return v.map(val).join('');
  if (v === null || v === undefined || v === false) return '';
  return esc(v);
};

export function html(strings, ...vals) {
  let out = '';
  strings.forEach((s, i) => { out += s + (i < vals.length ? val(vals[i]) : ''); });
  return new Raw(out);
}
