import styled from "styled-components";
import logo from "../../logo.png";

const Nav = styled.div`
  background: #202020;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
`;

const Image = styled.img.attrs(() => ({
  src: logo,
  alt: "logoImage",
}))`
  height: 2rem;
  @media screen and (min-width: 768px) {
    order: -1;
    padding: 0 70px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 5px;
    padding-right: 0;
  }
`;

const SearchIcon = styled.div`
  background-color: #ff0000;
  padding: 10px;
  display: flex;
  place-items: center;
`;

const DropDownHeader = styled.div`
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const DropDownListContainer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  position: absolute;
  top: 49.4px;
  left: 0;
  right: 0;
  background-color: #202020;
  color: #f5f5f5;
  padding: 1rem 0;
  font-weight: 600;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    position: unset;
    place-items: unset;
    background-color: unset;
  }
`;
const DropDownList = styled.p`
  padding: 1.2rem;
`;

const Input = styled.input.attrs(() => ({
  type: "search",
  placeholder: "search",
}))`
  background-color: #202020;
  border: 1px solid #696969;
  padding: 10px;
  color: #f5f5f5;
  width: 70vw;
  @media screen and (min-width: 768px) {
    width: unset;
  }
`;

const InputContainer = styled.div`
  display: flex;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  justify-content: center;
  @media screen and (min-width: 768px) {
    position: unset;
  }
`;

export {
  Nav,
  Image,
  SearchIcon,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  Input,
  InputContainer,
};
