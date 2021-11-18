import { styled } from "../../../config/styles/themeToken/themeToken";

import { HeadingTitle } from "../../../shared-components/ui/heading-title/heading-title";
import { Paragraph } from "../../../shared-components/ui/paragraph/paragraph";

const MainContent = styled("main", {
  display: "grid",
  placeItems: "center",
  gap: "$2",
});

export const HeroContent = () => {
  return (
    <MainContent>
      <HeadingTitle text="Download mp3 files from <youtube /> with ease" />
      <Paragraph text="just search your content, and download them faster than ever. no waiting, no copying links. just enjoy " />
    </MainContent>
  );
};
