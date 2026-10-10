import { payBlock } from './pay.js';
import { html, raw } from './html.js';
import { logo } from './logo.js';
import { WHY_US, TERMS_HOTELS, POLICY } from './config.js';
import { inr0, inrAuto, fmtFull } from './format.js';

const CHECK = raw('<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="#E2F1FA"/><path d="M4.6 8.3l2.2 2.2 4.6-4.8" fill="none" stroke="#1F2A6B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>');
const CROSS = raw('<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="8" fill="#EDE8DF"/><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" fill="none" stroke="#59628F" stroke-width="1.6" stroke-linecap="round"/></svg>');

const ph = (t) => html`<span class="ph">[${t}]</span>`;
const orPh = (v, t) => (v ? v : ph(t));

// ---- building blocks -------------------------------------------------------
function photo(img, cls = '', alt = '') {
  if (!img) return '';
  return html`<div class="photo ${cls}"><img src="${img.src}" alt="${alt}">${img.credit ? html`<span class="photo__credit">${img.credit}</span>` : ''}</div>`;
}
// A user-uploaded photo replaces the default and drops the attribution chip.
const pick = (m, key, def) => (m.photos?.[key] ? { src: m.photos[key] } : def);

const header = (m, cls = '') => html`<div class="hdr ${cls}">${logo('color', 30)}<div class="hdr__ref">${m.tour.name.toUpperCase()} · ${m.state.quoteNo}</div></div>`;
const footer = (m, i, total) => html`<div class="foot"><span>${m.company.shortName} · GSTIN ${m.company.gstin}</span><span>${String(i).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span></div>`;
const title = (eyebrow, h1, cls = '') => html`<div class="title ${cls}"><div class="eyebrow">${eyebrow}</div><h1 class="h1">${h1}</h1></div>`;
const page = (cls, inner) => html`<section class="page ${cls}">${inner}</section>`;

// ---- pages -----------------------------------------------------------------
function cover(m) {
  const t = m.tour;
  return page('page--cover', html`
    <div class="cover__hero">
      ${photo(pick(m, 'cover', t.cover), '', `${t.name} cover photo`)}
      <div class="cover__logo">${logo('color', 40)}</div>
      ${m.state.sample ? html`<div class="cover__tag">SAMPLE QUOTATION</div>` : ''}
    </div>
    <div class="cover__body">
      <div class="cover__top">
        <div class="cover__eyebrow">TRAVEL ITINERARY &amp; QUOTATION</div>
        <h1 class="cover__h1">${t.name}</h1>
        <div class="cover__dur">${t.durationLabel}</div>
      </div>
      <div class="cover__meta">
        <div><span class="k">PREPARED FOR</span><span class="v">${m.guestShown} (${m.adultsLabel})</span></div>
        <div><span class="k">TRAVEL DATES</span><span class="v">${m.dateRange}</span></div>
        <div><span class="k">QUOTE NO.</span><span class="v">${m.state.quoteNo}</span></div>
      </div>
      <div class="cover__foot"><span>${t.routeLine}</span><span>${m.company.website} · ${m.company.phone}</span></div>
    </div>`);
}

function glance(m, i, total) {
  const t = m.tour, g = t.glance, s = m.state;
  const fact = (k, v) => html`<div><span class="lbl">${k}</span><span class="v">${v}</span></div>`;
  const stops = t.route.map((r, idx) => {
    const last = idx === t.route.length - 1;
    return html`<div class="stop">
      ${last ? '' : html`<svg viewBox="0 0 100 40" preserveAspectRatio="none"><path d="M0 40 Q50 -6 100 40" fill="none" stroke="#4FB0E6" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="0.01 6" vector-effect="non-scaling-stroke"/></svg><span class="stop__leg">${r.leg}</span>`}
      <div class="stop__dotwrap"><div class="stop__dot ${last ? 'stop__dot--end' : ''}"></div></div>
      <span class="stop__name">${r.place}</span>
      <span class="stop__n">${r.nights} night${r.nights === 1 ? '' : 's'}</span>
      <span class="stop__d">${m.dayShort(r.from)} – ${m.dayShort(r.to)}${r.end || ''}</span>
    </div>`;
  });
  return page('', html`
    ${header(m)}
    <div class="title title--6"><div class="eyebrow">TRIP AT A GLANCE</div><h1 class="h1">${g.headline}</h1>
      <p class="lead" style="max-width:150mm">${g.intro(m.guestShown)}</p></div>
    <div class="card facts">
      ${fact('GUEST', m.guestShown)}${fact('TRAVEL DATES', m.dateRange)}${fact('DURATION', t.durationLabel)}
      ${fact('DESTINATION', t.destinationLine)}${fact('GUESTS', m.adultsLabel)}${fact('TRIP ID', s.tripId)}
      ${fact('PACKAGE ID', s.packageId)}${fact('TRIP COORDINATOR', s.coordinator.trim() || ph('Coordinator name'))}${fact('COORDINATOR CONTACT', s.coordinatorPhone)}
    </div>
    <div class="card route">
      <div class="route__head"><h2 class="h2">Your route</h2><span>${g.routeNote}</span></div>
      <div class="route__grid" style="grid-template-columns:repeat(${t.route.length},minmax(0,1fr))">${stops}</div>
    </div>
    <div class="why"><h2 class="h2">Why travel with us</h2>
      <div class="why__grid">${WHY_US.map(([h, p]) => html`<div><h3 class="h3">${h}</h3><p>${p}</p></div>`)}</div></div>
    ${footer(m, i, total)}`);
}

// A stay can override the star label (`category`, e.g. 'Deluxe houseboat') and the meal basis (`meals`).
const hotelKind = (h) => h.category || `${h.stars}-star`;
const hotelMeals = (m, h) => h.meals || m.tour.mealPlan || 'Breakfast';

function hotelCard(m, c) {
  const h = m.tour.hotels[c.hotel];
  const sub = `${hotelKind(h)} · ${h.room}${h.category ? '' : ' room'} · ${hotelMeals(m, h)}`;
  if (c.kind === 'checkin') {
    return html`<div class="card hcard"><span class="lbl">CHECK-IN · ${h.nights} NIGHT${h.nights === 1 ? '' : 'S'}</span>
      <span class="hcard__name">${h.name}</span><span class="hcard__sub">${sub}</span>
      <span class="hcard__sub">In ${m.dayShort(h.inDay)} · Out ${m.dayShort(h.outDay)}</span></div>`;
  }
  if (c.kind === 'staying') {
    return html`<div class="card hcard"><span class="lbl">${c.label}</span><span class="hcard__name">${h.name}</span>
      <span class="hcard__sub">${sub}</span><span class="hcard__sub">${c.note}</span></div>`;
  }
  return html`<div class="card hcard"><span class="lbl">CHECK-OUT</span><span class="hcard__name">${h.name}</span>
    <span class="hcard__sub">${c.note}</span></div>`;
}

function activity([name, mode, meta, text]) {
  return html`<div class="act"><div class="act__top"><h3 class="h3">${name}</h3><span class="badge badge--${mode.toLowerCase()}">${mode}</span></div>
    <div class="act__meta">${meta}</div><p>${text}</p></div>`;
}

function dayBlock(m, d) {
  const items = html`<div class="day__items">${d.items.map(activity)}</div>`;
  const body = d.last
    ? html`<div class="day__body">${photo(d.photo, 'photo--3x2 photo--round', d.title)}
        <div class="day__items">${hotelCard(m, d.card)}${d.items.map(activity)}</div></div>`
    : html`<div class="day__body"><div class="day__side">${photo(d.photo, 'photo--3x2 photo--round', d.title)}${hotelCard(m, d.card)}</div>${items}</div>`;
  return html`<div class="day">
    <div class="day__rail"><div class="day__dot ${d.last ? 'day__dot--end' : ''}"></div>${d.last ? '' : html`<div class="day__line"></div>`}</div>
    <div class="day__main">
      <div class="day__head"><h2 class="h2">Day ${d.n} · ${d.title}</h2><span class="day__date">${m.dayLong(d.n)}</span></div>
      ${body}
    </div></div>`;
}

function itinerary(m, ip, i, total) {
  const days = ip.days.map((n) => m.tour.days.find((d) => d.n === n));
  return page('', html`
    ${header(m)}
    ${title(`DAY-BY-DAY ITINERARY · ${ip.label}`, ip.headline)}
    <div class="tl">${days.map((d) => dayBlock(m, d))}</div>
    ${ip.goodToKnow ? html`<div class="card know"><h3 class="h3">Good to know</h3><div class="know__grid">${m.tour.goodToKnow.map((t) => html`<p>${t}</p>`)}</div></div>` : ''}
    ${footer(m, i, total)}`);
}

function stays(m, i, total) {
  const t = m.tour;
  return page('', html`
    ${header(m, 'hdr--6')}
    <div class="title title--stays"><div class="eyebrow">STAYS</div><h1 class="h1">Where you'll stay</h1><p class="lead">${t.staysIntro}</p></div>
    <div class="stays ${t.hotels.length <= 3 ? 'stays--wide' : ''} ${t.hotels.length === 3 ? 'stays--three' : ''}">${t.hotels.map((h, idx) => html`<div class="card stay">
      ${photo(pick(m, `hotel${idx + 1}`, h.photo), 'photo--3x2', h.name)}
      <div class="stay__body">
        <div><h2 class="stay__name">${h.name}</h2><span class="stay__sub">${hotelKind(h)} · ${h.place} · ${hotelMeals(m, h)} included</span></div>
        <div class="stay__grid">
          <div><span class="lbl">ROOM</span><b>${h.room}</b></div><div><span class="lbl">NIGHTS</span><b>${h.nights}</b></div>
          <div><span class="lbl">CHECK-IN</span><b>${m.dayLong(h.inDay)}</b></div><div><span class="lbl">CHECK-OUT</span><b>${m.dayLong(h.outDay)}</b></div>
        </div></div></div>`)}</div>
    ${t.staysNote ? html`<div class="basis" style="margin-top:4mm"><h3 class="h3">Meals</h3><p>${t.staysNote}</p></div>` : ''}
    ${footer(m, i, total)}`);
}

function inclusions(m, i, total) {
  const t = m.tour;
  return page('', html`
    ${header(m)}
    ${title('INCLUSIONS & EXCLUSIONS', 'What the price covers', 'title--6')}
    <div class="incl">
      <div class="card incl__card"><h2 class="h2">Included</h2>
        ${t.inclusions.map((g) => html`<div class="incl__group"><h3 class="h3">${g.head}${g.sub ? html` <span class="sub">· ${g.sub}</span>` : ''}</h3>
          ${g.items.map((x) => html`<div class="li">${CHECK}<span>${x}</span></div>`)}</div>`)}
      </div>
      <div class="card incl__card"><h2 class="h2">Not included</h2>
        <div class="incl__group incl__group--x">${t.exclusions.map((x) => html`<div class="li">${CROSS}<span>${x}</span></div>`)}</div>
        <div class="basis"><h3 class="h3">Pricing basis</h3><p>${t.price.basis}</p></div>
      </div>
    </div>
    ${footer(m, i, total)}`);
}

function priceAndBooking(m, i, total) {
  const t = m.tour, q = m.quote, st = m.settings, s = m.state;
  let taxRow;
  if (q.mode === 'extra') taxRow = html`<tr class="tax"><td colspan="3">GST @ ${q.rate}%</td><td class="amt">${inrAuto(q.gst)}</td></tr>`;
  else if (q.mode === 'included') taxRow = html`<tr class="tax"><td colspan="3">Taxes (GST)</td><td><span class="chip">INCLUDED IN PRICE</span></td></tr>`;
  else taxRow = html`<tr class="tax"><td colspan="3">Taxes (GST)</td><td><span class="chip">[TO BE CONFIRMED]</span></td></tr>`;
  return page('', html`
    ${header(m, 'hdr--6')}
    ${title('PRICE SUMMARY & BOOKING', 'Your price, and how to book', 'title--6')}
    <div class="card pricebox">
      <table class="ptable"><thead><tr><th>DESCRIPTION</th><th>RATE</th><th>GUESTS</th><th>AMOUNT</th></tr></thead>
        <tbody><tr><td class="desc"><b>${t.price.title}</b><span>${t.price.sub}</span></td><td>${inr0(m.perAdult)}</td><td>${m.adultsLabel}</td><td class="amt">${inr0(m.base)}</td></tr>${taxRow}</tbody></table>
      <div class="ptotal"><div class="ptotal__k"><span class="lbl" style="letter-spacing:.12em">TOTAL PAYABLE</span><span>${m.adultsLabel} · all amounts in INR</span></div>
        <span class="ptotal__v">${inrAuto(q.total)}</span></div>
    </div>
    <div class="card book"><h2 class="h2">Confirm your booking</h2>
      ${payBlock(m, 'PAY TO')}
      <div class="warn"><b>Pay only to the company's official account.</b><span>Unsure? Call ${m.company.phone} before paying.</span></div>
    </div>
    <div class="steps"><div><span class="lbl">STEP 1</span><b>Review and approve this plan</b></div>
      <div><span class="lbl">STEP 2</span><b>Pay the booking deposit</b></div>
      <div><span class="lbl">STEP 3</span><b>Receive your GST invoice and vouchers</b></div></div>
    ${footer(m, i, total)}`);
}

// Booking policy is the same for every booking, so it is fixed (see POLICY in config.js).
function terms(m) {
  const t = m.tour;
  const sec = (h, lis) => html`<section><h2>${h}</h2><ul>${lis.map((l) => html`<li>${l}</li>`)}</ul></section>`;
  const [c1, c2, c3] = POLICY.cancelTiers;
  return page('page--terms', html`
    ${header(m, 'hdr--6')}
    <div class="title title--terms"><div class="eyebrow">TERMS</div><h1 class="h1">Booking terms</h1>
      <p class="lead">A short summary of how bookings work.</p></div>
    <div class="terms">
      ${sec('Payment', [
        html`A booking deposit of <b>${POLICY.depositPct}% of the package</b> confirms your reservation.`,
        html`The balance is due <b>${POLICY.balanceDays} days</b> before the travel date.`,
        'Hotels, ferries and boats are booked once the deposit is received.',
        "Pay only to the company's official account. A GST invoice is issued for every payment."])}
      ${sec('Cancellation', [
        `Please send cancellations in writing to ${m.company.email}.`,
        html`<b>${c1.text}</b>: <b>${c1.pct}%</b> of the package cost is charged.`,
        html`<b>${c2.text}</b>: <b>${c2.pct}%</b> is charged.`,
        html`<b>${c3.text}</b>: <b>${c3.pct}%</b> is charged.`,
        "Issued ferry and boat tickets follow the operator's own refund rules."])}
      ${sec('Rescheduling', [
        'Date changes depend on availability and any difference in hotel, ferry or seasonal rates.',
        html`Requests <b>${POLICY.reschedFreeDays} days or more</b> before travel: <b>no charge</b>.`,
        html`Changes within <b>${POLICY.reschedFreeDays} days</b> of travel are treated as a cancellation and a new booking.`])}
      ${sec('Hotels', TERMS_HOTELS)}
      ${sec('Availability', [
        'This quotation is valid until last date of booking open. Rooms and seats are not held until the deposit is paid.',
        ...t.availabilityNotes])}
    </div>
    <div class="band">
      <div class="band__row">${logo('reversed', 44)}<div class="band__contact">${m.company.phone} · ${m.company.email} · ${m.company.website}</div></div>
      <div class="band__legal"><span>${m.company.legalName} · ${m.company.address}</span><b>GSTIN ${m.company.gstin}</b></div>
    </div>`);
}

export function renderQuotation(m) {
  const t = m.tour;
  const total = 5 + t.itineraryPages.length + 1; // cover, glance, itinerary…, stays, inclusions, price, terms
  let n = 1;
  const pages = [cover(m)];
  n++; pages.push(glance(m, n, total));
  for (const ip of t.itineraryPages) { n++; pages.push(itinerary(m, ip, n, total)); }
  n++; pages.push(stays(m, n, total));
  n++; pages.push(inclusions(m, n, total));
  n++; pages.push(priceAndBooking(m, n, total));
  pages.push(terms(m));
  return pages;
}
