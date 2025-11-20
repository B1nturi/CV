# Resume Viewer — Jubayer Alam Likhon

A simple static CV viewer with an embedded PDF preview and a one-click download button.

## Features
- In-browser PDF preview using the <embed> element (see [index.html](index.html)).
- Download button wired to the [`fileUrl`](script.js) constant in [script.js](script.js).
- Responsive layout via [style.css](style.css).

## How to use
1. Place the PDF in the project root: [Resume of Jubayer Alam Likhon.pdf](Resume%20of%20Jubayer%20Alam%20Likhon.pdf).  
2. Open [index.html](index.html) in your browser to view the embedded resume.  
3. Click the "Download CV" button (element id: [`#downloadBtn`](index.html)) to download the PDF.

## Customize
- To change which file is downloaded, edit the [`fileUrl`](script.js) constant in [script.js](script.js).
- To change the displayed file, edit the `src` attribute of the <embed> in [index.html](index.html).
- Styling is in [style.css](style.css).

## Files in this repo
- [index.html](index.html) — main page and embedded PDF.
- [script.js](script.js) — download button handler (see [`fileUrl`](script.js)).
- [style.css](style.css) — page styles and responsive rules.
- [Resume of Jubayer Alam Likhon.pdf](Resume%20of%20Jubayer%20Alam%20Likhon.pdf) — the resume PDF.

## Troubleshooting
- If the preview is blank, confirm the PDF filename exactly matches the embed `src` and that your browser allows local PDF previews.
- If download doesn't start, open the DevTools console to check for file path or permission errors.

## License
Use and modify freely.