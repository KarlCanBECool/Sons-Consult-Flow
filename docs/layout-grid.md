# Layout alignment grid

Shared spacing tokens live in [`src/styles/layout-tokens.css`](../src/styles/layout-tokens.css) and are consumed via Tailwind utilities (`px-page-gutter`, `py-page-py`, etc.).

## Horizontal rhythm (desktop)

| Element | Token | Value |
|---------|-------|-------|
| Navigation bar padding | `--spacing-nav-gutter` | 64px |
| Fixed back button (`Root.tsx`) | `--spacing-nav-gutter` | 64px from left |
| Wide pages (Plan, Review, Checkout) | `--spacing-page-gutter-wide` | 96px |
| Question step content column | `--spacing-content-narrow` | 550px (inside 624px wrapper) |

## Mobile (< 768px)

| Element | Token | Value |
|---------|-------|-------|
| Page horizontal gutter | `--spacing-page-gutter` | 16px |
| Top padding (clears back button) | `--spacing-page-pt-mobile` | 112px |
| Bottom padding | `--spacing-page-pb-mobile` | 56px |

## Breakpoints

- `max-md` — 768px: primary mobile layout
- `max-lg` / `lg:` — 1040px: two-column → stacked (Accept, PersonalDetails, wide pages)

## Layout wrappers

- **`StepScrollLayout`** — question steps, Accept, Testimonials, PersonalDetails
- **`QuestionStepLayout`** — centered 550px question column
- **`WidePageLayout`** — Plan, Review, Checkout
