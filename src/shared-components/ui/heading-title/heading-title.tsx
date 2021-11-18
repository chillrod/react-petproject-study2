import { styled } from "../../../config/styles/themeToken/themeToken";

const Title = styled("h1", {
  fontSize: "$5",
  color: `$purple11`,
  fontWeight: "$3",
  maxWidth: "$maxHeadingText",
  textAlign: "center",
});

export const HeadingTitle = <T extends { text: string }>({ text }: T) => {
  return <Title>{text}</Title>;
};
