import { createStitches } from "@stitches/react";

import { purpleDark } from "@radix-ui/colors";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      ...purpleDark,
    },
    space: {
      1: "0.5em",
      2: "1.5em",
      3: "2em",
    },
    fontSizes: {
      1: "1rem",
      2: "1.5rem",
      3: "2rem",
    },
    fontWeights: {
      1: 300,
      2: 500,
      3: 600,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
