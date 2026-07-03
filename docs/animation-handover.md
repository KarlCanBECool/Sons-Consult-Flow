# Sons Consultation Flow — Animation Handover

Developer reference for all motion values in the consultation flow prototype. Values are extracted from the current codebase and organized by screen.

**Last verified against:** `src/app/` step components, `Root.tsx`, `NavigationBar.tsx`, `TooltipIcon.tsx`, `src/styles/theme.css`

---

## Motion stack overview

| Layer | Library | Used for |
|-------|---------|----------|
| Page / complex motion | `motion/react` (Motion v12) | Page transitions, quote crossfade, loading carousel, testimonial carousel, checkout sub-steps, tooltips |
| CSS keyframes | `@keyframes fadeIn` in `src/styles/theme.css` | Conditional input reveal on checkbox questions |
| Tailwind transitions | `transition-*` utilities | Progress bar, FAQ accordion, selection rings, hover states |

There is **no centralized animation token system**. All values are defined inline in components.

### Implementation notes

- **Import path:** `import { motion, AnimatePresence } from "motion/react"` (not `framer-motion` directly)
- **No spring physics** — all motion uses duration + easing strings
- **Default Tailwind transition** where no explicit duration is set: ~150ms
- **`tw-animate-css`** is imported globally via `src/styles/tailwind.css` but is **not used** in consultation flow steps (only in generic shadcn `ui/*` components)
- **Responsive breakpoint:** `max-md` (Tailwind default, 768px) affects testimonial carousel x-offsets

### Source files

| File | Role |
|------|------|
| `src/app/Root.tsx` | Global page transition, floating back button |
| `src/app/components/NavigationBar.tsx` | Progress bar, nav hover states, exit modal |
| `src/app/components/TooltipIcon.tsx` | Info tooltip fade |
| `src/app/components/steps/*.tsx` | Step-specific animations |
| `src/styles/theme.css` | `fadeIn` keyframe |

---

## Global quick-reference

| Screen | Animation | Duration | Easing | Transform / property |
|--------|-----------|----------|--------|----------------------|
| All steps | Page enter | 300ms | ease-in-out | opacity 0→1, translateY 16px→0 |
| Nav | Progress bar fill | 500ms | ease-out | width % |
| Step 0 | Quote crossfade | 450ms | ease-in-out | opacity, translateY ±24px |
| Steps 5, 7 | Input reveal | 200ms | ease | opacity 0→1, translateY -4px→0 |
| Step 9 | Testimonial carousel | 400ms | ease-in-out | translateX ±440/±256px, scale 0.6/1 |
| Step 12 | Logo entrance | 600ms | ease-out | opacity 0→1, scale 0.9→1 |
| Step 12 | Goal cards | 400–500ms | ease-in-out | translateY ±80/20px, width, opacity stagger |
| Step 13 | FAQ accordion | 300ms | ease-out | rotate 45°, max-height, opacity |
| Step 15 | Checkout sub-steps | 350ms | ease-out | opacity, translateY ±20px |
| Steps 2–8 | Tooltip | 300ms | ease-in-out | opacity 0→1 |

---

## Behavioral timing (non-visual)

These are not animations but affect perceived flow timing:

| Screen | Constant | Value | Behavior |
|--------|----------|-------|----------|
| Step 0 | `QUOTE_DELAY` | 3000ms | Auto-advance to next quote; after final quote, navigates to Step 1 |
| Steps 2, 3, 4, 6 | Selection delay | 300ms | `setTimeout` before auto-advance after option selected |
| Step 9 | Swipe threshold | 40px | Touch delta required to trigger prev/next |
| Step 12 | Entrance complete | 1800ms | Marks `entered = true`; infinite rotation begins |
| Step 12 | Rotation interval | 1400ms | New goal card cycles in |
| Step 12 | Screen timeout | 8000ms | Auto-advance to Step 13 |
| Tooltip | Touch dismiss | 2000ms | Tooltip hides after touch |

---

## Step index

| Step | Route | Screen | Motion library |
|------|-------|--------|----------------|
| 0 | `/step/0` | Welcome | Motion |
| 1 | `/step/1` | Accept | Hover only |
| 2 | `/step/2` | Hair loss type | Tailwind + tooltip |
| 3 | `/step/3` | Hair loss start (radio) | Tailwind + tooltip |
| 4 | `/step/4` | Mood (radio) | Tailwind + tooltip |
| 5 | `/step/5` | Medicines (checkbox) | CSS keyframe + Tailwind + tooltip |
| 6 | `/step/6` | Treatment type (radio) | Tailwind + tooltip |
| 7 | `/step/7` | Conditions (checkbox) | CSS keyframe + Tailwind + tooltip |
| 8 | `/step/8` | Goals (checkbox) | Tailwind + tooltip (no input reveal) |
| 9 | `/step/9` | Testimonials | Motion |
| 10 | `/step/10` | Disclaimer | Hover only |
| 11 | `/step/11` | Personal details | Hover only |
| 12 | `/step/12` | Loading | Motion |
| 13 | `/step/13` | Plan | Tailwind |
| 14 | `/step/14` | Review | Hover only |
| 15 | `/step/15` | Checkout | Motion |

---

## Global chrome

### Page transition (all steps)

**Source:** `src/app/Root.tsx` (lines 73–77)

| Property | Value |
|----------|-------|
| Element | Full page content wrapper (`<Outlet>` inside `motion.div`) |
| Trigger | Route change (`key={location.pathname}`) |
| Library | Motion (`motion/react`) |

**Enter**

| Property | From | To |
|----------|------|-----|
| Opacity | 0 | 1 |
| Translate Y | 16px | 0 |
| Duration | 300ms | |
| Easing | ease-in-out | |

**Exit:** None defined (new page mounts; previous page unmounts without exit animation)

---

### Navigation bar progress

**Source:** `src/app/components/NavigationBar.tsx` (lines 81–84)

| Property | Value |
|----------|-------|
| Element | Progress bar fill segments ("You", "Your plan") |
| Trigger | Step advances (inline `width` style updates) |
| Property animated | `width` |
| Duration | 500ms |
| Easing | ease-out |
| Classes | `transition-all duration-500 ease-out` |

**Other nav micro-interactions**

| Element | Classes | Trigger |
|---------|---------|---------|
| Cart icon | `hover:opacity-80 transition-opacity` | Hover |
| Close (exit) icon | `opacity-30 hover:opacity-50 transition-opacity` | Hover |
| Exit modal buttons | `transition-colors` | Hover |

**Exit confirmation modal:** Instant mount/unmount — no enter/exit animation.

---

### Floating back button

**Source:** `src/app/Root.tsx` (line 56)

| Property | Value |
|----------|-------|
| Visible on | Steps 1–11, 13 (hidden on 0, 12, 14, 15) |
| Trigger | Hover |
| Property | `background-color` |
| Classes | `transition-colors` (~150ms default) |
| Hover | `rgba(200,200,200,0.4)` → `rgba(200,200,200,0.6)` |

---

### Info tooltip (Steps 2–8)

**Source:** `src/app/components/TooltipIcon.tsx` (lines 40–45, 81)

| Property | Value |
|----------|-------|
| Element | Tooltip panel (portaled to `document.body`, fixed position) |
| Trigger | `mouseenter` / `touchstart` on (i) icon |
| Dismiss | `mouseleave`; touch auto-dismiss after 2000ms |

**Enter**

| Property | From | To |
|----------|------|-----|
| Opacity | 0 | 1 |
| Duration | 300ms | |
| Easing | ease-in-out | |

No position or transform animation. Tooltip width: 393px.

---

## Step 0 — Welcome

**Source:** `src/app/components/steps/WelcomeStep.tsx`

### Quote text crossfade

| Property | Value |
|----------|-------|
| Element | Headline quote block (2 quotes) |
| Trigger | Mount, tap anywhere, or 3000ms timer between quotes |
| Mode | `AnimatePresence mode="wait"` |

**Enter**

| Property | From | To |
|----------|------|-----|
| Opacity | 0 | 1 |
| Translate Y | -24px | 0 |
| Duration | 450ms | |
| Easing | ease-in-out | |

**Exit**

| Property | From | To |
|----------|------|-----|
| Opacity | 1 | 0 |
| Translate Y | 0 | -24px |
| Duration | 450ms | |
| Easing | ease-in-out | |

**Timing:** `QUOTE_DELAY = 3000ms`. After final quote, auto-navigates to Step 1.

**Static:** Doctor pill below quote — no animation.

---

## Step 1 — Accept

**Source:** `src/app/components/steps/AcceptStep.tsx`

No enter/exit or timed animations.

| Element | Animation |
|---------|-----------|
| "I accept" button | `hover:bg-[#3600b3] transition-colors` (~150ms) |

---

## Step 2 — Hair loss type

**Source:** `src/app/components/steps/HairLossTypeStep.tsx`

### Option card selection

| Property | Value |
|----------|-------|
| Element | 4 hair-loss type cards |
| Trigger | Hover / selection |
| Classes | `transition-all` |
| Duration | ~150ms (Tailwind default) |
| Hover | `bg-white` → `bg-[#f7f7f7]` |
| Selected | 2px ring `#4300DD` |

**Behavioral delay:** 300ms after selection before auto-advance (not a visual animation).

**Tooltip:** See global tooltip spec.

---

## Steps 3, 4, 6 — Radio questions

**Source:** `src/app/components/steps/RadioQuestionStep.tsx`

Used for:
- Step 3: How did your hair loss start?
- Step 4: Mood / antidepressants
- Step 6: Treatment type preference

### Radio option buttons

| Property | Value |
|----------|-------|
| Element | Answer option rows (520px desktop, full-width mobile) |
| Trigger | Hover / selection |
| Classes | `transition-all` |
| Duration | ~150ms |
| Hover | `bg-[#f7f7f7]` → `bg-[#efefef]` |
| Selected | 2px ring `#4300DD` |

**Behavioral delay:** 300ms after selection before auto-advance.

**Tooltip:** See global tooltip spec.

---

## Steps 5, 7, 8 — Checkbox questions

**Source:** `src/app/components/steps/CheckboxQuestionStep.tsx`, `src/styles/theme.css`

Used for:
- Step 5: Medicines (input reveal enabled)
- Step 7: Conditions (input reveal enabled)
- Step 8: Goals (`showInputs={false}` — no input reveal)

### Conditional input reveal (Steps 5 and 7 only)

**Keyframe** (`theme.css`):

```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

| Property | Value |
|----------|-------|
| Element | "Additional information" input block |
| Trigger | Option selected (excludes "None of these" / "All of the above" variants) |
| Inline style | `animation: fadeIn 200ms ease forwards` |

| Property | From | To |
|----------|------|-----|
| Opacity | 0 | 1 |
| Translate Y | -4px | 0 |
| Duration | 200ms | |
| Easing | ease | |
| Fill mode | forwards | |

### Checkbox / option rows

| Property | Value |
|----------|-------|
| Trigger | Hover / toggle |
| Classes | `transition-colors` on checkbox and option rows |
| Duration | ~150ms |
| Hover | `bg-[#f7f7f7]` → `bg-[#efefef]` |

**Tooltip:** See global tooltip spec (Steps 5, 7, 8).

---

## Step 9 — Testimonials

**Source:** `src/app/components/steps/TestimonialsStep.tsx`

### Testimonial carousel

| Property | Value |
|----------|-------|
| Element | 3 `LargeCard` wrappers (center + 2 side cards) |
| Trigger | Arrow click, dot click, swipe (delta > 40px) |
| Duration | 400ms |
| Easing | ease-in-out |
| Transform origin | center center |

**Desktop positions** (`SIDE_X = 440`)

| Role | Translate X | Scale |
|------|-------------|-------|
| Center (active) | 0 | 1 |
| Left | -440px | 0.6 |
| Right | +440px | 0.6 |

**Mobile positions** (`max-md`, `SIDE_X = 256`)

| Role | Translate X | Scale |
|------|-------------|-------|
| Center (active) | 0 | 1 |
| Left | -256px | 0.6 |
| Right | +256px | 0.6 |

**Card dimensions:** Desktop card half-width = 260px (520px card). Mobile card half-width = 150px (300px card).

**Pagination dots**

| State | Opacity |
|-------|---------|
| Active | 100% |
| Inactive | 20% |
| Transition | `transition-opacity` (~150ms) |

**Note:** When carousel wraps, the third card (neither old nor new center) teleports instantly to the opposite side with `z-index: 0` — no transition on that jump.

---

## Step 10 — Disclaimer

**Source:** `src/app/components/steps/DisclaimerStep.tsx`, `src/app/components/FormButtonExpand.tsx`

Uses `QuestionStepLayout` (same shell as question steps).

| Element | Animation |
|---------|-----------|
| Expand body (NHS / GP cards) | Enter: opacity 0→1, height 0→auto, 300ms ease-in-out. Exit: opacity 1→0, height auto→0, 200ms ease-in-out. `AnimatePresence` + `motion.div` in `FormButtonExpand.tsx` |
| Expand / close icons | `transition-transform duration-300 ease-in-out` |
| Checkbox | `transition-colors` |
| Continue button | `transition-colors`; disabled state uses static `opacity-50` |
| Collapsed expand cards | `hover:bg-[#efefef] transition-colors` |

---

## Step 11 — Personal details

**Source:** `src/app/components/steps/PersonalDetailsStep.tsx`

No enter/exit animations.

| Element | Animation |
|---------|-----------|
| Checkbox | `transition-colors` |
| Continue button | `transition-colors` |

---

## Step 12 — Loading

**Source:** `src/app/components/steps/LoadingStep.tsx`

### Logo + headline entrance

| Property | Value |
|----------|-------|
| Element | Sons logo, doctor avatar, headline ("We're putting together your personalised plan") |
| Trigger | Mount |

| Property | From | To |
|----------|------|-----|
| Opacity | 0 | 1 |
| Scale | 0.9 | 1 |
| Duration | 600ms | |
| Easing | ease-out | |

### Goal cards vertical carousel

| Property | Value |
|----------|-------|
| Element | 3 goal pills: Regrow hair, Gain confidence, Stop hair loss |
| Trigger | Mount stagger, then infinite rotation every 1400ms |
| Mode | `AnimatePresence mode="popLayout"` + `layout` |

**Position constants** (top / middle / bottom slot)

| Slot | Width | Opacity |
|------|-------|---------|
| 0 (top) | 360px | 0.7 |
| 1 (middle) | 420px | 1.0 |
| 2 (bottom) | 300px | 0.5 |

**Initial entrance** (first 1800ms, `entered = false`)

| Property | Value |
|----------|-------|
| Initial | `y: 20px`, `opacity: 0` |
| Animate | `y: 0`, opacity per slot, width per slot |
| Stagger delay | `position × 400ms` (0ms, 400ms, 800ms) |
| Y duration | 500ms, ease-in-out |
| Opacity duration | 400ms, ease-in-out |
| Width duration | 500ms, ease-in-out |

**Infinite rotation** (after `entered = true`, every 1400ms)

| Phase | Values |
|-------|--------|
| Enter | `y: 80px → 0`, `opacity: 0 → slot opacity` |
| Exit | `y: 0 → -80px`, `opacity → 0` |
| Layout | 500ms, ease-in-out |

**Auto-advance:** 8000ms on screen → navigates to Step 13.

---

## Step 13 — Plan

**Source:** `src/app/components/steps/PlanStep.tsx`

### FAQ accordion

| Property | Value |
|----------|-------|
| Element | Plus icon + answer panel |
| Trigger | FAQ row click |

**Icon rotation**

| State | Rotation | Duration |
|-------|----------|----------|
| Closed | 0° | 300ms |
| Open | 45° | 300ms |
| Property | transform | |
| Classes | `transition-transform duration-300` | |

**Answer panel**

| State | max-height | Opacity |
|-------|------------|---------|
| Closed | 0 | 0 |
| Open | 500px | 1 |
| Duration | 300ms | |
| Easing | ease-out | |
| Classes | `transition-all duration-300 ease-out` | |

**Back button hover:** `hover:opacity-60 transition-opacity`

---

## Step 14 — Review

**Source:** `src/app/components/steps/ReviewStep.tsx`

No enter/exit animations.

| Element | Animation |
|---------|-----------|
| Edit buttons, CTAs | `transition-colors` on hover |

---

## Step 15 — Checkout

**Source:** `src/app/components/steps/CheckoutStep.tsx`

### Checkout sub-step transition

Applies to: Account → Shipping → Payment forms (`AnimatePresence mode="wait"`)

| Property | Value |
|----------|-------|
| Element | Entire form panel per sub-step |
| Trigger | Form submit or breadcrumb edit |

**Enter**

| Property | From | To |
|----------|------|-----|
| Opacity | 0 | 1 |
| Translate Y | 20px | 0 |
| Duration | 350ms | |
| Easing | ease-out | |

**Exit**

| Property | From | To |
|----------|------|-----|
| Opacity | 1 | 0 |
| Translate Y | 0 | -20px |
| Duration | 350ms | |
| Easing | ease-out | |

**Other**

| Element | Animation |
|---------|-----------|
| Back button | `hover:opacity-60 transition-opacity` |
| Inactive breadcrumb steps | Static `opacity-60` (no transition) |

---

# Figma comment blocks

Copy-paste the blocks below as Figma comments on the corresponding frames.

---

## GLOBAL — Page transition

```
DEV HANDOVER — Page transition
Applies to: Every step change (/step/0 → /step/15)
Element: Full page content wrapper (Outlet)
Trigger: Route change (key = pathname)
Library: Motion (motion/react)

Enter:
- Opacity: 0 → 1
- Translate Y: 16px → 0
- Duration: 300ms
- Easing: ease-in-out

Exit: None (new page mounts over; no exit animation defined)
Source: Root.tsx
```

---

## GLOBAL — Navigation bar progress

```
DEV HANDOVER — Progress bar fill
Applies to: All steps (NavigationBar)
Element: "You" / "Your plan" progress segments
Trigger: Step advances (width % updates)
Property: width
Duration: 500ms
Easing: ease-out
Note: Exit modal mounts instantly — no enter/exit animation
Source: NavigationBar.tsx
```

---

## GLOBAL — Back button hover

```
DEV HANDOVER — Floating back button
Applies to: Steps 1–11, 13 (hidden on 0, 12, 14, 15)
Trigger: Hover
Property: background-color
Duration: Tailwind default (~150ms)
Easing: default
Source: Root.tsx
```

---

## GLOBAL — Tooltip

```
DEV HANDOVER — Info tooltip
Applies to: Question screens with (i) icon (Steps 2–8)
Element: Tooltip panel (portaled, fixed position)
Trigger: mouseenter / touchstart
Enter: Opacity 0 → 1 | 300ms | ease-in-out
Dismiss: mouseleave; touch auto-dismiss after 2000ms
No position/transform animation
Source: TooltipIcon.tsx
```

---

## STEP 0 — Welcome

```
DEV HANDOVER — Quote text crossfade
Element: Headline quote block (2 quotes, auto-advances)
Trigger: Mount, tap anywhere, or timer (3000ms between quotes)
Mode: AnimatePresence wait (exit completes before enter)

Enter:
- Opacity: 0 → 1
- Translate Y: -24px → 0
- Duration: 450ms
- Easing: ease-in-out

Exit:
- Opacity: 1 → 0
- Translate Y: 0 → -24px
- Duration: 450ms
- Easing: ease-in-out

Timing: QUOTE_DELAY = 3000ms; auto-navigates to Step 1 after final quote
Static: Doctor pill below quote — no animation
Source: WelcomeStep.tsx
```

---

## STEP 1 — Accept

```
DEV HANDOVER — Accept screen
No enter/exit or timed animations.
Micro-interactions only:
- "I accept" button: hover background-color transition (Tailwind default ~150ms)
Source: AcceptStep.tsx
```

---

## STEP 2 — Hair loss type

```
DEV HANDOVER — Option card selection
Element: 4 hair-loss type cards
Trigger: Hover / selection
Property: background-color + ring (transition-all)
Duration: Tailwind default (~150ms)
Selected state: 2px ring #4300DD

Behavioral delay: 300ms after selection before auto-advance (not a visual animation)
Tooltip: see GLOBAL tooltip spec
Source: HairLossTypeStep.tsx
```

---

## STEPS 3, 4, 6 — Radio questions

```
DEV HANDOVER — Radio option buttons
Element: Answer option rows (520px desktop, full-width mobile)
Trigger: Hover / selection
Property: background-color + ring (transition-all)
Duration: Tailwind default (~150ms)
Hover: bg #F7F7F7 → #EFEFEF
Selected: 2px ring #4300DD

Behavioral delay: 300ms after selection before auto-advance
Tooltip: see GLOBAL tooltip spec
Source: RadioQuestionStep.tsx
```

---

## STEPS 5, 7 — Checkbox questions (input reveal)

```
DEV HANDOVER — Conditional input reveal
Applies to: Steps 5 and 7 only (Step 8 has showInputs disabled)
Element: "Additional information" input block
Trigger: Option selected
Animation: fadeIn (CSS keyframe)
- Opacity: 0 → 1
- Translate Y: -4px → 0
- Duration: 200ms
- Easing: ease
- Fill mode: forwards
Source: theme.css + CheckboxQuestionStep.tsx

DEV HANDOVER — Checkbox / option rows
Trigger: Hover / toggle
Property: background-color, border-color (transition-colors)
Duration: Tailwind default (~150ms)
Source: CheckboxQuestionStep.tsx
```

---

## STEP 8 — Goals (checkbox, no input reveal)

```
DEV HANDOVER — Checkbox option rows
Element: Goal option rows
Trigger: Hover / toggle
Property: background-color (transition-colors)
Duration: Tailwind default (~150ms)
No conditional input reveal on this screen
Tooltip: see GLOBAL tooltip spec
Source: CheckboxQuestionStep.tsx
```

---

## STEP 9 — Testimonials

```
DEV HANDOVER — Testimonial carousel
Element: 3 LargeCard wrappers (center + 2 side cards)
Trigger: Arrow click, dot click, swipe (delta > 40px)
Duration: 400ms
Easing: ease-in-out
Transform origin: center center

Desktop positions:
- Center: x 0, scale 1
- Left: x -440px, scale 0.6
- Right: x +440px, scale 0.6

Mobile positions (max-md):
- Center: x 0, scale 1
- Left: x -256px, scale 0.6
- Right: x +256px, scale 0.6

Pagination dots:
- Active: opacity 100%
- Inactive: opacity 20%
- Transition: opacity (Tailwind default)

Note: Third card teleports instantly when jumping sides (no transition on teleport)
Source: TestimonialsStep.tsx
```

---

## STEP 10 — Disclaimer

```
DEV HANDOVER — Disclaimer screen
Layout: QuestionStepLayout (550px content column, shared with question steps)
Expand cards (NHS Summary of Care, GP Consent):
- Enter: opacity 0→1, height 0→auto, 300ms ease-in-out
- Exit: opacity 1→0, height auto→0, 200ms ease-in-out
- Source: FormButtonExpand.tsx (motion/react AnimatePresence)
Micro-interactions: checkbox + button hover (transition-colors, ~150ms)
Collapsed expand cards: hover bg #f7f7f7 → #efefef
Disabled continue: static opacity 50%
Source: DisclaimerStep.tsx, FormButtonExpand.tsx
```

---

## STEP 11 — Personal details

```
DEV HANDOVER — Personal details screen
No enter/exit animations.
Micro-interactions: checkbox + continue button hover (transition-colors)
Source: PersonalDetailsStep.tsx
```

---

## STEP 12 — Loading

```
DEV HANDOVER — Logo + headline entrance
Element: Sons logo, doctor avatar, headline text
Trigger: Mount
- Opacity: 0 → 1
- Scale: 0.9 → 1
- Duration: 600ms
- Easing: ease-out

DEV HANDOVER — Goal cards vertical carousel
Element: 3 goal pills (Regrow hair / Gain confidence / Stop hair loss)
Trigger: Mount stagger, then infinite rotation every 1400ms
Mode: AnimatePresence popLayout + layout

Position constants (top/middle/bottom):
- Widths: 360px | 420px | 300px
- Opacity: 0.7 | 1.0 | 0.5

Initial entrance (first 1800ms):
- Initial Y: 20px, opacity 0
- Animate Y: 0, opacity per position
- Stagger delay: position × 400ms (0ms, 400ms, 800ms)
- Y duration: 500ms ease-in-out
- Opacity duration: 400ms ease-in-out
- Width duration: 500ms ease-in-out

Infinite rotation (after entered = true):
- New card enter: Y 80px → 0, opacity 0 → position opacity
- Exit: Y 0 → -80px, opacity → 0
- Layout: 500ms ease-in-out
- Interval: 1400ms per rotation

Auto-advance: 8000ms total on screen → Step 13
Source: LoadingStep.tsx
```

---

## STEP 13 — Plan

```
DEV HANDOVER — FAQ accordion
Element: Plus icon + answer panel
Trigger: FAQ row click

Icon rotation:
- Closed: rotate 0°
- Open: rotate 45°
- Duration: 300ms
- Property: transform

Answer panel:
- Closed: max-height 0, opacity 0
- Open: max-height 500px, opacity 1
- Duration: 300ms
- Easing: ease-out

Back button hover: opacity → 60% (transition-opacity)
Source: PlanStep.tsx
```

---

## STEP 14 — Review

```
DEV HANDOVER — Review screen
No enter/exit animations.
Micro-interactions: Edit + CTA buttons (transition-colors on hover)
Source: ReviewStep.tsx
```

---

## STEP 15 — Checkout

```
DEV HANDOVER — Checkout sub-step transition
Applies to: Account → Shipping → Payment forms
Element: Entire form panel
Trigger: Form submit or breadcrumb edit
Mode: AnimatePresence wait

Enter:
- Opacity: 0 → 1
- Translate Y: 20px → 0
- Duration: 350ms
- Easing: ease-out

Exit:
- Opacity: 1 → 0
- Translate Y: 0 → -20px
- Duration: 350ms
- Easing: ease-out

Back button hover: opacity → 60%
Inactive breadcrumb steps: static opacity 60% (no transition)
Source: CheckoutStep.tsx
```
