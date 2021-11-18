import { styled } from "../../config/styles/themeToken/themeToken";

import { HeroContent } from "./hero-content/header";

import { Navigator } from "../../shared-components/ui/navigator/navigator";
import { SearchInput } from "../../shared-components/ui/search-input/search-input";

const Box = styled("div", {});

const Container = styled("div", {
  display: "grid",
  justifyContent: "center",
  gap: "$2",
});

export const App = () => {
  return (
    <>
      <Navigator appTitle="yout.me" />
      <Container>
        <HeroContent />
        <Box>
          <SearchInput />
        </Box>
      </Container>
    </>
  );
};
