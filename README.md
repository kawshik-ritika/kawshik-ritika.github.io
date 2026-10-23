# Kawshik & Ritika — Invitation Cards

Static invitation site, Bangla by default with an English toggle.

| URL | Shows |
|---|---|
| `/wedding` | Wedding only — 11 Dec 2026, Polashpol, Satkhira |
| `/reception` | Reception only — 13 Dec 2026, Uttara Community Center, Dhaka |
| `/wedding-reception` (and `/`) | Both |

`?lang=en` opens a link in English. A guest's language choice is remembered.

## Run locally

```bash
python -m http.server 8080
```

Open http://localhost:8080/wedding etc.

## Editing

All text, dates, venues and map locations are in `js/config.js`.

- **Couple photo / avatar:** put the image in `assets/` and set `couplePhoto: 'assets/couple.png'`.
- **Exact map pin:** set an event's `mapQuery` to `"lat,lng"`.

## Structure

```
index.html, wedding/, reception/, wedding-reception/   page shells (differ only by data-card)
js/config.js   content
js/app.js      rendering, language, countdown, share, petals
css/style.css  styles
```
