import { styled } from "../../../config/styles/themeToken/themeToken";

const Title = styled("h1", {
  fontSize: "$3",
  color: `$purple11`,
  fontWeight: "$2",
});

export const HeadingTitle = <T extends { text: string }>({ text }: T) => {
  return <Title>{text}</Title>;
};
