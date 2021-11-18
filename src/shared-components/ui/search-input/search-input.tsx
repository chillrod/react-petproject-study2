import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { styled } from "../../../config/styles/themeToken/themeToken";

const SearchInputWrapper = styled("section", {
  display: "flex",

  marginTop: "$3",
  padding: "$2",
  borderRadius: "$1",

  backgroundColor: "$violet3",
});

const SearchIcon = styled(MagnifyingGlassIcon, {
  color: "$purple11",
  width: "$searchIcon !important",
  height: "$searchIcon !important",
});

const Input = styled("input", {
  outline: "none",
  background: "none",
  border: "none",

  width: "100%",
  height: "100%",
  marginLeft: "$1",

  fontSize: "$2",
  color: "$purple11",
});

export const SearchInput = () => {
  return (
    <SearchInputWrapper>
      <SearchIcon />
      <Input type="search" />
    </SearchInputWrapper>
  );
};
