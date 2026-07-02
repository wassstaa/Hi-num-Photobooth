// src/data/gridOptions.js

export const GRID_TYPES = {
  STRIP_1X4: "1x4",
  STRIP_2X2: "2x2",
};

export const GRID_OPTIONS = [
  {
    id: GRID_TYPES.STRIP_1X4,
    label: "1 x 4",
    description: "4 foto memanjang ke bawah",
    columns: 1,
    rows: 4,
    totalShots: 4,
    orientation: "vertical",
    previewSvg: "/images/ui/grid-1x4-preview.svg",
    slotAspectRatio: 1080 / 800,
    stripDimensions: {
      width: 1200,
      height: 4300,
    },
    slotDimensions: {
      width: 1080,
      height: 800,
    },
  },
  {
    id: GRID_TYPES.STRIP_2X2,
    label: "2 x 2",
    description: "4 foto bersama, 2 atas 2 bawah, strip memanjang ke samping",
    columns: 2,
    rows: 2,
    totalShots: 4,
    orientation: "horizontal",
    previewSvg: "/images/ui/grid-2x2-preview.svg",
    slotAspectRatio: 1080 / 800,
    stripDimensions: {
      width: 2400,
      height: 2220,
    },
    slotDimensions: {
      width: 1080,
      height: 800,
    },
  },
];

export const getGridOptionById = (id) =>
  GRID_OPTIONS.find((option) => option.id === id) || null;
