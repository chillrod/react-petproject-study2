import { styled } from "../../../config/styles/themeToken/themeToken";

const P = styled("p", {
  fontSize: "$2",
  color: `$violet11`,
  fontWeight: "$1",
  maxWidth: "$maxHeadingParagraph",
  textAlign: "center",
});

export const Paragraph = <T extends { text: string }>({ text }: T) => {
  return <P>{text}</P>;
};
