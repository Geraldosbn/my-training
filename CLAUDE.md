# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (hot reload)
npm run build     # Production bundle to dist/
npm run preview   # Serve the production build locally
```

No test or lint scripts are configured.

## Architecture

Single-page React + Vite application — a personal gym workout tracker for two users ("eu" and "esposa"), all in Portuguese.

**`src/App.jsx`** is the entire application — roughly 1000+ lines containing all UI, state, and data. There are no sub-components, no CSS files, and no API calls. All styling is inline.

**Data model:** Two hardcoded user profiles with 4 workout routines each (A/B/C/D for male, E1/E2/E3/E4 for female). Routine definitions live as plain JS objects inside `App.jsx`.

**Persistence:** `localStorage` under the key `"treino_gym_data_v2"`. State structure tracks per-user, per-workout-day progress and recorded loads for each exercise.

**State:** Managed entirely with `useState` hooks inside `App.jsx`. No external state library.

## Key design constraints

- Mobile-first layout (`maxWidth: 520px`), dark theme (background `#0F0F0F`).
- No TypeScript, no linting tooling, no test framework.
- All user-facing strings are in Brazilian Portuguese.
- Adding a new exercise or changing a workout means editing the data objects directly in `App.jsx`.
