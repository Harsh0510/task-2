import React from "react";
import { footerData } from "./FooterData";
import {
  FooterContainer,
  FooterItem,
  Image,
  FooterInfo,
  FooterData,
} from "./Styled";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterInfo>
          <Image />
          <Link to='' className='info'>
            <p>© 2022 GitHub, Inc.</p>
          </Link>
        </FooterInfo>
        <FooterData>
          {footerData.map((item, index) => (
            <FooterItem key={index}>
              {item.map((child) => (
                <Link to={child.footerLink} className='listItems'>
                  <div key={child.footerText}>{child.footerText}</div>
                </Link>
              ))}
            </FooterItem>
          ))}
        </FooterData>
      </FooterContainer>
    </>
  );
}
