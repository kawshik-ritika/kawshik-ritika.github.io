# Kawshik & Ritika — Invitation Cards

Static invitation site in Bangla.

| URL | Shows |
|---|---|
| `/wedding` | Wedding only — 11 Dec 2026, Chowrangi Mor, Polashpol, Satkhira. Card from Ritika's parents |
| `/reception` | Bou-bhat only — 13 Dec 2026, Uttara Community Center, Dhaka. Card from Kawshik's mother |
| `/wedding-reception` | Both — both families' cards |
| `/` | Empty on purpose, so the cards are only reached through the shared links |

## Run locally

```bash
python -m http.server 8080
```

Open http://localhost:8080/wedding etc.

## Editing

All text, dates, venues, phone numbers and map locations are in `js/config.js`, copied from the printed cards.
Each printed card is a `sheets` entry (people page + letter); each page lists its `events` and `sheets` in `cards`.
On wide screens a card opens as a two-page spread, on phones as two screens.

- **Couple photo / avatar:** put the image in `assets/` and set `couplePhoto: 'assets/couple.png'`.
- **Maps:** `mapQuery` is what the embedded map pins (`"lat,lng"` for an exact point); `mapLink` is the Google Maps link the buttons open.
- **Link previews (WhatsApp, Messenger):** come from the `og:` meta tags in each page shell and the 1200×630 images `assets/og-*.jpg`. If a title or date changes, update both.

## Structure

```
index.html, wedding/, reception/, wedding-reception/   page shells (differ only by data-card)
js/config.js   content
js/app.js      rendering, countdown, share, petals
css/style.css  styles
assets/og-*.jpg  link preview images
```
