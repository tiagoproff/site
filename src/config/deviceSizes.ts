export const deviceSizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 520,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const deviceSizesQueries = {
  mobileS: `(min-width: ${deviceSizes.mobileS}px)`,
  mobileM: `(min-width: ${deviceSizes.mobileM}px)`,
  mobileL: `(min-width: ${deviceSizes.mobileL}px)`,
  tablet: `(min-width: ${deviceSizes.tablet}px)`,
  laptop: `(min-width: ${deviceSizes.laptop}px)`,
  laptopL: `(min-width: ${deviceSizes.laptopL}px)`,
  desktop: `(min-width: ${deviceSizes.desktop}px)`,
  desktopL: `(min-width: ${deviceSizes.desktop}px)`,
};
