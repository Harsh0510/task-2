import styled from "styled-components";
import logo from "../../logo.png";
const FooterContainer = styled.div`
  background-color: #202020;
  display: flex;
  justify-content: space-evenly;
`;
const FooterItem = styled.div`
  .listItems {
    color: #f5f5f5;
    text-decoration: none;
  }
`;
const FooterData = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
`;
const FooterInfo = styled.div`
  display: flex;
  width: 30vw;
  .info {
    color: #f5f5f5;
    text-decoration: none;
  }
`;
const Image = styled.img.attrs(() => ({
  src: logo,
  alt: "logoImage",
}))`
  height: 40%;
`;

export { FooterContainer, FooterItem, Image, FooterInfo, FooterData };
