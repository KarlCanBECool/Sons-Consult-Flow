# Mobile Responsive — Refinement Pass 2

## Context
Pass 1 added the baseline mobile layout. This pass addresses four specific refinements reported after visual review: question answer buttons not stretching to full width, carousel card gaps and centering, Step 1 hero image not rendering + Log in placement, and Hair Loss option card sizing on mobile. Desktop must remain completely unchanged.

---

## Refinement 1 — Question Answer Buttons (Full Width)

**Problem:** The option button containers in `RadioQuestionStep` and `CheckboxQuestionStep` have `items-start` on the flex-col parent and `shrink-0` on the wrapper div, so children use intrinsic width rather than filling the container. `max-md:w-full` on the buttons alone isn't enough.

**Fix — `RadioQuestionStep.tsx`:**
- The `flex flex-col gap-[16px] items-start relative shrink-0` div that wraps option buttons: add `max-md:w-full` so the buttons have a full-width parent to size against.

**Fix — `CheckboxQuestionStep.tsx`:**
- Same pattern: the `flex flex-col gap-[16px] items-start relative shrink-0` wrapper: add `max-md:w-full`.
- The option div itself already has `max-md:w-full` — no change needed there.

No desktop changes (classes are additive `max-md:` only).

---

## Refinement 2 — Carousel (16px Gap, Centred)

**Problem:** Current mobile x offset is `±278px`, producing ~22px visual gap between cards. User requires 16px gap, centred.

**Math:** Center card = 300px (half = 150px). With 16px gap: side card centre = `150 + 16 + 150 = 316px` from viewport centre. So `SIDE_X` changes from `278` → `316`.

**Fix — `TestimonialsStep.tsx`:**
- Change `const SIDE_X = isMobile ? 278 : 440;` → `const SIDE_X = isMobile ? 316 : 440;`
- Arrow positions update to match new card positions:
  - Left arrow: `calc(50% - 184px)` → `calc(50% - 192px)` (316 - 150 + arrow_half ~24 ≈ 192)
  - Right arrow: `calc(50% + 136px)` → `calc(50% + 144px)`
- No changes to desktop values, `getCardTarget`, animation, or swipe logic.

---

## Refinement 3 — AcceptStep (Step 1)

**Three sub-changes, all `max-md:` only:**

### 3a — Restore hero image

**Problem:** The current mobile image `<img className="max-md:block hidden w-full object-cover rounded-[24px]">` uses `object-cover` without an explicit container height, so the image collapses to 0px.

**Fix:** Remove `object-cover` and let the image display at its natural aspect ratio (`w-full` with auto height). Also add `max-md:h-auto` to the left column container (currently has `h-full` which forces the desktop full-height behaviour on mobile too). The `imgImageBadge` asset (`figma:asset/66a585cd8fd2152b52db6f4d0fb56bbf2e6556bb.png`) already imported.

Also add the doctor avatar overlay (as in M3PreConsult Figma) — it sits inside the image wrapper on top of `imgImageBadge`:
```jsx
{/* Mobile only: doctor avatar overlay */}
<div className="max-md:block hidden absolute top-0 left-0 p-[16px]">
  <div className="relative rounded-[9999px] size-[80px]">
    <img ... src={imgImage1} className="..." />
    <div className="absolute border-2 border-[#4100e7] border-solid inset-0 rounded-[9999px]" />
  </div>
</div>
```

### 3b — Move Log in link

**Problem:** On mobile, the "Already have an account? Log in" paragraph appears AFTER the entire stacked column block. User wants it immediately after the "I accept" button.

**Fix:**
- Add `max-md:hidden` to the existing outer Log in paragraph (hides it on mobile).
- Duplicate it inside the right column content area, immediately after the `<button>I accept</button>`, with `md:hidden` (hidden on desktop).

### 3c — 56px bottom padding

**Fix:** Add `max-md:pb-[56px]` to the outer scrollable content wrapper in `AcceptStep.tsx` (the `py-[80px]` div that wraps everything).

---

## Refinement 4 — HairLossTypeStep (Image Containers)

**Problem:** On mobile, option cards don't fill full width (they use `flex-[1_0_0]` which works for flex-row growth but not for flex-col cross-axis width). Also need 24px vertical padding around the image inside each card.

**Fix — `HairLossTypeStep.tsx`:**

**Card button full width:**
- `HairLossOption` button: already has `max-md:min-h-[180px] max-md:h-auto`. Add `max-md:w-full` to ensure full width in the stacked column.

**24px padding around image + centre content:**
- The inner content div `flex flex-col gap-[16px] items-center justify-center p-[16px]`: add `max-md:py-[24px]` to increase vertical padding to 24px on mobile while keeping `px-[16px]`.

**Preserve aspect ratio (no crop/distort):**
- SVGs are inherently scalable and won't crop. No changes to SVG rendering needed.
- The `max-md:h-auto` on the row already allows natural height expansion. ✓

---

## Files to Modify

| File | Change |
|---|---|
| `src/app/components/steps/RadioQuestionStep.tsx` | Add `max-md:w-full` to option buttons wrapper div |
| `src/app/components/steps/CheckboxQuestionStep.tsx` | Add `max-md:w-full` to option buttons wrapper div |
| `src/app/components/steps/TestimonialsStep.tsx` | `SIDE_X` 278→316, arrow positions update |
| `src/app/components/steps/AcceptStep.tsx` | Fix hero image, doctor overlay, Log in placement, pb-[56px] |
| `src/app/components/steps/HairLossTypeStep.tsx` | `max-md:w-full` on button, `max-md:py-[24px]` on inner div |

---

## Verification

1. **Buttons:** On 390px viewport, question step answer buttons should span edge-to-edge within 16px page margin
2. **Carousel:** Side cards should show with exactly 16px gap from center card
3. **AcceptStep:** Mobile shows hero badge image, doctor avatar overlay, Log in below I accept button, 56px bottom padding
4. **HairLossTypeStep:** Cards fill full width; image SVGs have 24px vertical breathing room; no distortion

---

## Breakpoint Strategy
- **Breakpoint**: `md` = 768px (Tailwind default)
- **Approach**: Mobile-first overrides using `max-md:` on existing desktop classes
- **No new desktop breakpoints** — desktop classes stay exactly as-is

---

## 1 — NavigationBar (`src/app/components/NavigationBar.tsx`)

Replace hardcoded desktop values with responsive equivalents. Desktop unchanged; `max-md:` adds mobile overrides.

| Element | Desktop | Mobile |
|---|---|---|
| Nav padding | `px-[64px] py-[25px]` | `max-md:p-[16px]` |
| Sons icon | `h-[50px] w-[35px]` | `max-md:h-[40px] max-md:w-[28px]` |
| Icon → steps gap | `gap-[48px]` | `max-md:gap-[24px]` |
| Between steps gap | `gap-[24px]` | `max-md:gap-[16px]` |
| Step containers | `w-[562.5px]` | `max-md:w-auto max-md:flex-1` |
| Progress label text | `text-[16px] leading-[20px]` | `max-md:text-[14px] max-md:leading-[18px]` |

The exit-confirmation modal already has `mx-[24px] max-w-[500px]` so it is fine on mobile.

---

## 2 — Root.tsx (back button)

Mobile nav is 72px tall (40px icon + 16px×2 padding). Back button must reposition.

```
Desktop: fixed top-[132px] left-[64px]
Mobile:  max-md:top-[104px] max-md:left-[16px]
```

---

## 3 — WelcomeStep (`src/app/components/steps/WelcomeStep.tsx`)

From M1Quote1 import:
- Quote text: `text-[36px] leading-[40px]` → `max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]`
- Add horizontal padding on the content container: `max-md:px-[24px]`
- Doctor callout pill stays `w-[228px]` (fits on mobile)

---

## 4 — AcceptStep (`src/app/components/steps/AcceptStep.tsx`)

From M3PreConsult import. Desktop two-column → mobile single column.

**Layout change:**
- Outer row: add `max-md:flex-col` (image top, content below)
- Left image column (`w-[450px]`): add `max-md:w-full max-md:h-auto`
- Right content column (`w-[559px]`): add `max-md:w-full max-md:px-[24px] max-md:py-[40px]`

**Mobile hero image:**
- Import the mobile badge image: `import imgImageBadge from "figma:asset/66a585cd8fd2152b52db6f4d0fb56bbf2e6556bb.png"`
- On mobile (`max-md:hidden` / `md:hidden`), swap the full-height desktop image for the mobile `imgImageBadge` asset at `rounded-[24px] w-full` with the doctor avatar overlaid at `p-[16px]`
- The desktop image wrapper stays unchanged (`md:block`)

**Typography:**
- Title `text-[36px]` → `max-md:text-[24px] max-md:leading-[28px]`

**Section gap:** `max-md:gap-[32px]` between image, top content, and legal text.

**"Already have an account?" line:** `w-[1034px]` → add `max-md:w-full`

---

## 5 — HairLossTypeStep (`src/app/components/steps/HairLossTypeStep.tsx`)

From user spec: 2×2 grid → single-column list.

- Outer container `w-[600px]` → `max-md:w-full max-md:px-[16px]`
- Each row `flex gap-[24px] h-[250px]` → `max-md:flex-col max-md:h-auto`
- Each `HairLossOption` card: `flex-[1_0_0]` already works; add `max-md:w-full max-md:min-h-[180px]`
- Title: `text-[28px] leading-[34px]` → `max-md:text-[24px] max-md:leading-[32px]`

---

## 6 — RadioQuestionStep (`src/app/components/steps/RadioQuestionStep.tsx`)

- Container `w-[600px]` → `max-md:w-full max-md:px-[16px]`
- Option buttons `w-[520px]` → `max-md:w-full`
- Title: `text-[28px] leading-[34px]` → `max-md:text-[24px] max-md:leading-[32px]`

---

## 7 — CheckboxQuestionStep (`src/app/components/steps/CheckboxQuestionStep.tsx`)

Same pattern as RadioQuestionStep:
- Container `w-[600px]` → `max-md:w-full max-md:px-[16px]`
- Option buttons `w-[520px]` → `max-md:w-full`
- Title: `text-[28px] leading-[34px]` → `max-md:text-[24px] max-md:leading-[32px]`

---

## 8 — Other single-column steps (Disclaimer, PersonalDetails, Loading)

Apply the same container pattern:
- `w-[600px]` or fixed widths → `max-md:w-full max-md:px-[16px]`
- Title font: same `max-md:text-[24px] max-md:leading-[32px]` rule

**PersonalDetailsStep** (two-column): `items-stretch` flex row → `max-md:flex-col`. Form panel stacks above image. Image panel: `max-md:w-full max-md:h-[300px]`.

---

## 9 — TooltipIcon (`src/app/components/TooltipIcon.tsx`)

Three improvements:

**a) 40×40 touch target** (invisible, icon stays 16×16):
Wrap the `<span>` in a slightly larger container on mobile. Change the outer span to have a larger tappable area via negative margin / padding trick:
```jsx
// Add max-md:p-[12px] max-md:-m-[12px] to effectively create 40px touch target
```
Actually, the cleaner approach: change the span's `size-[16px]` to `size-[16px] md:size-[16px] max-md:size-[40px]` and keep the SVG absolutely centred inside.

**b) Viewport overflow protection:**
In `handleMouseEnter`, after computing `pos.left`, clamp it so the tooltip never extends past the right edge:
```ts
const tooltipWidth = 393;
const clampedLeft = Math.min(
  Math.max(rect.left - 189, 8),
  window.innerWidth - tooltipWidth - 8
);
```

**c) Notch stays centred on icon:**
The notch `marginLeft: 189` is the distance from tooltip left to icon centre. When `left` is clamped, the notch offset needs to adjust:
```ts
const notchLeft = rect.left + 8 - clampedLeft; // icon centre minus tooltip left
```
Pass `notchLeft` as a variable into the rendered notch div.

---

## 10 — TestimonialsStep Carousel (`src/app/components/steps/TestimonialsStep.tsx`)

From M11Reassurance import. The mobile carousel is a compact 3-card peek view.

**Card dimensions on mobile (from import):**
- Center card: ~300px wide, full scale (1.0)
- Side cards: ~240px wide, peeking in from edges, no scale transform needed — they're clipped by the container

**Implementation approach:**

Create a `useIsMobile` hook (checks `window.innerWidth < 768` via `matchMedia`).

On mobile, pass different values to the carousel:
```ts
const isMobile = useIsMobile();
const CARD_WIDTH = isMobile ? 300 : 520;
const SIDE_X = isMobile ? 278 : 440; // centre of side card from container centre
const MARGIN_LEFT = isMobile ? -150 : -260; // half of card width
```

`getCardTarget` stays the same function; only the constants change.

The invisible spacer div uses the same `LargeCard` but on mobile the card `w-[520px]` class changes to `max-md:w-[300px]`.

**Arrow button positions on mobile (from import — arrows at outer edges of ~340px card area):**
- Left: `calc(50% - 190px - 24px)` (card group edge)
- Right: `calc(50% + 190px - 24px)`

Use the `isMobile` flag:
```ts
style={{ left: isMobile ? 'calc(50% - 214px)' : 'calc(50% - 620px)' }}
style={{ left: isMobile ? 'calc(50% + 166px)' : 'calc(50% + 572px)' }}
```

**Swipe gestures:**
Add `onTouchStart` / `onTouchEnd` handlers to the carousel container:
```ts
const touchStartX = useRef(0);
const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
const handleTouchEnd = (e) => {
  const delta = touchStartX.current - e.changedTouches[0].clientX;
  if (delta > 40) goNext();
  else if (delta < -40) goPrev();
};
```

**Header text on mobile:**
- `We've helped...` heading: `max-md:text-[24px] max-md:leading-[28px]`
- Header `max-w-[600px]` → `max-md:px-[16px]`

**Overall carousel padding:** `max-md:pb-[56px] max-md:pt-[32px] max-md:px-[16px]` (from import's MainContainer)

**Continue button:** already `w-full` — no change needed.

---

## 11 — `useIsMobile` hook

Create `src/app/hooks/useIsMobile.ts`:
```ts
import { useState, useEffect } from "react";
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}
```

Used only in carousel and any component that can't be solved with pure Tailwind responsive classes.

---

## Files to Modify

| File | Change type |
|---|---|
| `src/app/Root.tsx` | Back button responsive position |
| `src/app/components/NavigationBar.tsx` | Mobile nav layout |
| `src/app/components/TooltipIcon.tsx` | Touch target + viewport clamping |
| `src/app/components/steps/WelcomeStep.tsx` | Typography |
| `src/app/components/steps/AcceptStep.tsx` | Two-column → single, mobile hero image |
| `src/app/components/steps/HairLossTypeStep.tsx` | 2×2 → single column |
| `src/app/components/steps/RadioQuestionStep.tsx` | Width + typography |
| `src/app/components/steps/CheckboxQuestionStep.tsx` | Width + typography |
| `src/app/components/steps/DisclaimerStep.tsx` | Width + typography |
| `src/app/components/steps/PersonalDetailsStep.tsx` | Two-column → single |
| `src/app/components/steps/TestimonialsStep.tsx` | Mobile carousel layout + swipe |
| `src/app/hooks/useIsMobile.ts` | New hook |

PlanStep, ReviewStep, CheckoutStep: apply the two-column stacking rule if they contain side-by-side layouts (check at implementation time and apply same pattern).

---

## Verification

1. Resize browser to 390px wide — all steps should be single-column with 16px side padding
2. Confirm desktop at 1280px is pixel-identical to current
3. Test carousel swipe on mobile viewport — left/right swipe should advance cards
4. Test tooltip on mobile — tap the icon, confirm tooltip stays within viewport, notch centred
5. Test exit modal on mobile — should be contained within screen
6. Test back button positioning — should appear at left-[16px], below mobile nav
