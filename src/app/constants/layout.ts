/**
 * Layout class fragments referencing @theme spacing tokens (layout-tokens.css).
 * Desktop alignment grid: nav/back at nav-gutter (64px), wide pages at page-gutter-wide (96px).
 */
export const pageGutterMobile = "px-page-gutter";
export const pageGutterWide = "px-page-gutter-wide max-lg:px-page-gutter";
export const pagePaddingMobile =
  "max-md:pt-page-pt-mobile max-md:pb-page-pb-mobile max-md:px-page-gutter max-md:py-0";
export const pagePaddingDesktop = "py-page-py";
export const widePagePadding = `${pagePaddingDesktop} ${pageGutterWide} max-lg:py-page-py-tablet`;
export const h1MobileScale = "max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-1.08px]";
