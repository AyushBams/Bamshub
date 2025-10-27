# BAMShub — BAMS Learning Portal (Tailwind UI)

This version uses Tailwind CSS (via CDN) for a modern, polished UI while keeping the site fully static and GitHub Pages friendly.

## What changed
- Replaced custom CSS with Tailwind-based layout.
- Kept JS and data files intact; behavior unchanged.
- No build step required — using Tailwind CDN (suitable for prototyping/GitHub Pages).

## Deploy
Same steps as before. Push to `main` and enable Pages from root.

## Local test
Run:
```
python -m http.server 8000
```
and open http://localhost:8000
