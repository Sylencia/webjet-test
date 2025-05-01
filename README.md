# How to run

- `bun install`
- `bun dev`

It should then be running on `localhost:5173`.

# Tools Used

- React + Vite
- Tailwind for CSS
- Zustand for state management

# Assumptions made

- When deselecting All or when we have no selected quality filters, we should display all results, as the UX is better that way.
- We do not retain any memory of what qualities were previously selected when All is toggled on and then off as it leads to some unintuitive filters (if they don't remember they had previously filtered by quality before)
- Name filter only filters when we submit/press Go because in an actual scenario we don't want to hammer the server on every key press.
- Filtering by a rating gives that rating and rating + 1/2. (eg. filtering by 3 stars gives 3 and 3.5 stars.)
