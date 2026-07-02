// src/data/themeOptions.js

export const THEME_IDS = {
  WHITE: "white",
  BABY_PINK: "baby-pink",
  LIGHT_BLUE: "light-blue",
  SOFT_GRAY: "soft-gray",
  MINT: "mint",
  PINK_POLKADOT: "pink-polkadot",
  BLACK_POLKADOT: "black-polkadot",
};

export const THEME_OPTIONS = [
  {
    id: THEME_IDS.WHITE,
    label: "Basic White",
    baseColor: "#FFFAFA",
    accentColor: "#E5E5E5",
    isPolkadot: false,
    templatePath: {
      "1x4": "/templates/white/strip-1x4.svg",
      "2x2": "/templates/white/strip-2x2.svg",
    },
  },
  {
    id: THEME_IDS.BABY_PINK,
    label: "Baby Pink",
    baseColor: "#F5CDD8",
    accentColor: "#FFFAFA",
    isPolkadot: false,
    templatePath: {
      "1x4": "/templates/baby-pink/strip-1x4.svg",
      "2x2": "/templates/baby-pink/strip-2x2.svg",
    },
  },
  {
    id: THEME_IDS.LIGHT_BLUE,
    label: "Light Blue",
    baseColor: "#C9DCEB",
    accentColor: "#FFFAFA",
    isPolkadot: false,
    templatePath: {
      "1x4": "/templates/light-blue/strip-1x4.svg",
      "2x2": "/templates/light-blue/strip-2x2.svg",
    },
  },
  {
    id: THEME_IDS.SOFT_GRAY,
    label: "Soft Gray",
    baseColor: "#E4E4E4",
    accentColor: "#FFFAFA",
    isPolkadot: false,
    templatePath: {
      "1x4": "/templates/soft-gray/strip-1x4.svg",
      "2x2": "/templates/soft-gray/strip-2x2.svg",
    },
  },
  {
    id: THEME_IDS.MINT,
    label: "Mint",
    baseColor: "#D3ECE1",
    accentColor: "#FFFAFA",
    isPolkadot: false,
    templatePath: {
      "1x4": "/templates/mint/strip-1x4.svg",
      "2x2": "/templates/mint/strip-2x2.svg",
    },
  },
  {
    id: THEME_IDS.PINK_POLKADOT,
    label: "Pink Polkadot",
    baseColor: "#000000",
    accentColor: "#F5CDD8",
    isPolkadot: true,
    polkadotColor: "#F5CDD8",
    templatePath: {
      "1x4": "/templates/pink-polkadot/strip-1x4.svg",
      "2x2": "/templates/pink-polkadot/strip-2x2.svg",
    },
  },
  {
    id: THEME_IDS.BLACK_POLKADOT,
    label: "Black Polkadot",
    baseColor: "#F5CDD8",
    accentColor: "#000000",
    isPolkadot: true,
    polkadotColor: "#000000",
    templatePath: {
      "1x4": "/templates/black-polkadot/strip-1x4.svg",
      "2x2": "/templates/black-polkadot/strip-2x2.svg",
    },
  },
];

export const getThemeById = (id) =>
  THEME_OPTIONS.find((theme) => theme.id === id) || null;
