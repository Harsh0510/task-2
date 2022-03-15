import React from "react";
import { Nav, Image, SearchIcon } from "./Styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes, FaSearch } from "react-icons/fa";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <Nav>
        <GiHamburgerMenu className={styles.iconGiHamburgerMenu} />
        <Image />
        {/* <FaTimes className={styles.iconFaTimes} /> */}
        <SearchIcon>
          <FaSearch className={styles.iconFaSearch} />
        </SearchIcon>
      </Nav>
    </>
  );
}
