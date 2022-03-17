import { useState, useEffect } from "react";
import {
  Nav,
  Image,
  SearchIcon,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  Input,
  InputContainer,
} from "./Styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaSearch } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
  }, []);

  const toggling = () => {
    setIsOpen(!isOpen);
    setSearch(false);
  };
  const togglingSearch = () => {
    setSearch(!isSearch);
    setIsOpen(false);
  };
  return (
    <>
      <Nav>
        <div className={styles.navItem}>
          <DropDownHeader onClick={toggling}>
            {!isOpen ? (
              <GiHamburgerMenu className={styles.iconGiHamburgerMenu} />
            ) : (
              <FaTimes className={styles.iconFaTimesWhite} />
            )}
          </DropDownHeader>
          {(isOpen || windowWidth > 768) && (
            <DropDownListContainer>
              <DropDownList>Home</DropDownList>
              <DropDownList>About</DropDownList>
              <DropDownList>Blogs</DropDownList>
              <DropDownList>Contact</DropDownList>
              <DropDownList>Feedback</DropDownList>
            </DropDownListContainer>
          )}
          <Image />
        </div>
        <DropDownHeader onClick={togglingSearch}>
          {!isSearch ? (
            <SearchIcon>
              <FaSearch className={styles.iconFaSearch} />
            </SearchIcon>
          ) : (
            <FaTimes className={styles.iconFaTimesRed} />
          )}
        </DropDownHeader>
        {(isSearch || windowWidth > 768) && (
          <InputContainer>
            <Input />
            <SearchIcon>
              <FaSearch className={styles.iconFaSearch} />
            </SearchIcon>
          </InputContainer>
        )}
      </Nav>
    </>
  );
}
