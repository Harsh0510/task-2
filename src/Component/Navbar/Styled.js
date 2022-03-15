import styled from "styled-components";
import logo from "../../logo.png";

const Nav = styled.div`
  background: #202020;
  height: 50px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Image = styled.img.attrs((props) => ({
  src: logo,
  alt: "logoImage",
}))`
  height: 2rem;
`;

const SearchIcon = styled.div`
  background-color: red;
  padding: 5px;
  display: flex;
  place-items: center;
`;

export { Nav, Image, SearchIcon };
