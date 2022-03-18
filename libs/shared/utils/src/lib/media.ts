import { css, CSSObject } from '@emotion/react';

const media = {
  desktop:
    (width?: number) =>
    (first: CSSObject, ...args: any[]) =>
      width === undefined
        ? css`
            @media (min-width: 769px) {
              ${css(first, ...args)};
            }
          `
        : width >= 769
        ? css`
            ${css(first, ...args)};
          `
        : css``,
  tablet:
    (width?: number) =>
    (first: CSSObject, ...args: any[]) =>
      width === undefined
        ? css`
            @media (max-width: 768px) and (min-width: 361px) {
              ${css(first, ...args)};
            }
          `
        : 361 <= width && width <= 768
        ? css`
            ${css(first, ...args)};
          `
        : css``,
  mobile:
    (width?: number) =>
    (first: CSSObject, ...args: any[]) =>
      width === undefined
        ? css`
            @media (max-width: 360px) {
              ${css(first, ...args)};
            }
          `
        : width <= 360
        ? css`
            ${css(first, ...args)};
          `
        : css``,
  tabletAndDesktop:
    (width?: number) =>
    (first: CSSObject, ...args: any[]) =>
      width === undefined
        ? css`
            @media (min-width: 361px) {
              ${css(first, ...args)};
            }
          `
        : width >= 361
        ? css`
            ${css(first, ...args)};
          `
        : css``,
  // mobileAndTablet: (first: any, ...args: any[]) => css`
  //   @media (max-width: 1023px) {
  //     ${css(first, ...args)};
  //   }
  // `,
};

export { media };
