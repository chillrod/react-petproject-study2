import { createStitches } from "@stitches/react";

import { purpleDark, violetDark } from "@radix-ui/colors";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      ...purpleDark,
      ...violetDark,
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
      4: "3rem",
      5: "4rem",
    },
    fontWeights: {
      1: 300,
      2: 500,
      3: 600,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      maxHeadingParagraph: "600px",
      maxHeadingText: "800px",
      searchIcon: "2em",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      1: "0.2em",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
