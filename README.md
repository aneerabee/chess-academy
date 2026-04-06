# Chess Academy ♟️

Interactive chess course — Arabic + English. Learn chess from absolute zero to confident player.

**Live:** https://aneerabee.github.io/chess-academy/

## What's Inside

- **6 phases**, 32 concepts — from "what is a chessboard" to "analyze your own games"
- **Interactive chess boards** — FEN positions with highlights, arrows, step-through
- **Quizzes** after each phase — test understanding, not memorization
- **XP + Streak system** — gamified learning with progress tracking
- **Freemium model** — 2 phases free, 4 phases for $19 (one-time, lifetime access)

## Structure

```
index.html          — Arabic landing/sales page
app.html            — Arabic course app
en/index.html       — English landing page
en.html             — English course app
thank-you.html      — Post-purchase page (AR)
en/thank-you.html   — Post-purchase page (EN)
css/app.css         — Course app design system
css/chess-board.css  — Chess board component styles
js/app.js           — Course engine (navigation, XP, paywall)
js/chess-board.js   — Interactive chess board component
data/lessons-ar.js  — Arabic lesson content (32 concepts)
data/lessons-en.js  — English lesson content (32 concepts)
```

## Tech

- Pure HTML/CSS/JS — no frameworks, no build tools
- GitHub Pages hosting
- Gumroad for payments
- SHA-256 access code verification
- localStorage for progress

## License

All rights reserved.
