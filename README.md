# KS Travel Hub – Quotation & Invoice Generator

A static web tool (no build step, no backend). Fill the form → the 9-page quotation
and 1-page GST invoice update live → **Download PDF**.

## Run locally
    python3 -m http.server 8765      # then open http://localhost:8765

(ES modules need http://, not file://.)

## Deploy on Vercel
1. Push this folder to a GitHub repo (or run `npx vercel` inside it).
2. Import the repo in Vercel → Framework preset: **Other**, no build command, output dir: `.`
3. Done. `vercel.json` adds noindex headers and caching.
Render: create a *Static Site*, publish directory `.`, no build command.

Note: Vercel's free Hobby plan is for non-commercial use; use a paid plan (or Render/Netlify/Cloudflare Pages) once it is a client's live tool.

## Where things are
| What | Where |
|---|---|
| Company name, GSTIN, address | `js/config.js` → `COMPANY` |
| Bank / UPI / QR / cancellation policy | In the app → "Company settings" (saved per browser), defaults in `js/config.js` |
| A tour's itinerary, hotels, inclusions | `js/tours/<tour>.js` |
| Register a new tour | `js/tours/index.js` |
| Document look | `css/doc.css` |
| Form fields | `js/form.js` (`SECTIONS`) |
| GST / totals maths | `js/model.js` |

## Tours included
Default prices per adult come from the website catalogue (editable per quote in the form).
- Andaman Islands (5N/6D, Rs 25,000)
- Darjeeling & Gangtok, "Tea Country" (5N/6D, Rs 22,999)
- Kerala, "Backwaters & Hills" (5N/6D, Rs 24,999): Kochi, Munnar, Thekkady, houseboat night in Alleppey
- Meghalaya, "Living Root Country" (4N/5D, Rs 26,999): Shillong, Cherrapunji, Dawki
- Rajasthan, "Royal Rajasthan Circuit" (6N/7D, Rs 27,999): Jaipur, Jodhpur, Udaipur
- Kashmir, "Valley in Full" (5N/6D, Rs 29,999): Dal Lake houseboat, Pahalgam, Gulmarg
- Ladakh, "High Desert Circuit" (6N/7D, Rs 38,999): Leh, Nubra, Pangong
- Kutch, "White Desert Weekender" (2N/3D, Rs 8,999)
- Rishikesh & Mussoorie, "Ganga & Mussoorie" (3N/4D, Rs 12,499)
- Goa, "Two Coastlines" (3N/4D, Rs 14,999)
- Shimla, Kufri & Chail, "Hill Station Classic" (3N/4D, Rs 15,999)
- Manali & Solang Valley, "Snowline Escape" (4N/5D, Rs 18,499)

The itineraries (stops, timings, distances) are a standard plan written for these packages, not taken from the website. Check them with your operator before sending. The website itself has no per-day detail.

Pick the tour in the first dropdown. Changing tour resets the package ID, trip ID and the price per adult to that tour's default.

## Photos
Each tour reads its pictures from `img/<tour>/`: `cover.jpg`, `day1.jpg` ... `day6.jpg`, `hotel1.jpg`, `hotel2.jpg` (and `hotel3`/`hotel4` where a tour has more stays) (3:2, about 900 px wide; the cover is roughly square).
Darjeeling & Gangtok and Kerala use photos from Wikimedia Commons (CC BY, CC BY-SA or CC0). The licences require attribution, so each photo carries a small credit chip in the PDF; keep them.
To swap in your own photos, overwrite the files with the same names and remove or change the `credit` text on that photo in the tour file. Some stay photos show the place (a view, a show), not the hotel itself; replace them with the real hotel pictures once you know the hotels.
A tour can set `stopgapPhotos: true` to show a checklist warning while it still uses stand-ins.
Cover and hotel photos can also be uploaded per quotation in the form.

## Hotel names
Set them per quotation under "Hotels" in the form. Leave blank to use the name in the tour file.

## Add a new tour
1. Copy `js/tours/andaman.js` → `js/tours/<name>.js`; edit route, hotels, days, inclusions, photos.
2. Put photos in `img/<name>/`.
3. Add it to `js/tours/index.js`.

## Before sending anything to a customer
The "Before you send" checklist in the app lists what is still a placeholder:
SAC code / GST rate (confirm with the accountant), bank & UPI details, cancellation policy,
sample status. Invoice numbers are typed manually (keep them sequential).

## Known limits
- PDF uses the browser's Print → Save as PDF (A4, margins none, background graphics on).
- Settings and the current form are stored in the browser's localStorage, per device.
- Stock photos are illustrative, not the actual hotels.
