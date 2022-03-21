import styled from "styled-components";
import logo from "../../logo.png";
const FooterContainer = styled.div`
  background-color: #202020;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 1rem 0;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const FooterItem = styled.div`
  .listItems {
    color: #f5f5f5;
    text-decoration: none;
  }
  .listItem {
    padding: 4px;
  }
`;
const FooterData = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
const FooterInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 30vw;
  .info {
    color: #f5f5f5;
    text-decoration: none;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 1rem;
  }
  @media screen and (min-width: 600px) and (max-width: 930px) {
    flex-direction: column;
  }
`;
const Image = styled.img.attrs(() => ({
  src: logo,
  alt: "logoImage",
}))`
  height: 40%;
  @media screen and (max-width: 600px) {
    height: 5vh;
  }
`;

export { FooterContainer, FooterItem, Image, FooterInfo, FooterData };
