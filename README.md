# Robot cello listening test

A static, phone-friendly A/B listening test. Each pair is the same short passage played twice by a robot on the same cello; which take is which is randomized per pair and hidden. Listeners play A and B, answer four quick questions per pair (overall preference, confidence, sustained tone, note starts, note endings) plus free notes, and the answers are posted to a Google Form (configured in `config.js`).

- `index.html`: the whole app (no build step, no external libraries).
- `config.js`: piece list and the Google Form endpoint plus field ids.
- `clips/<piece>_pair<k>_<A|B>.wav`: 44.1 kHz mono, loudness as played.

Run locally with any static server, for example `python3 -m http.server 8000`, then open `http://localhost:8000/`.

Answers are also kept in the listener's browser (localStorage) so they can stop and continue on the same device, and can be copied as CSV from the last screen.
