import { styled } from "../../../config/styles/themeToken/themeToken";
import { Paragraph } from "../paragraph/paragraph";

const Nav = styled("nav", {
  display: "flex",

  marginBottom: "$3",
  padding: "$2",

  backgroundColor: "$violet2",
});

export const Navigator = <T extends { appTitle: string }>({ appTitle }: T) => {
  return (
    <Nav>
      <Paragraph text={appTitle} />
    </Nav>
  );
};
