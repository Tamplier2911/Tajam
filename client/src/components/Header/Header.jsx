// import "./Header.scss";
import React, { useState, useEffect, useContext } from "react";
import jump from "jump.js";

// utils
import { debounce } from "../../utils/debounce";

// context
import AppStore from "../../contexts/GlobalContext/globalContext";

// components
import Link from "../Link/Link";

// image
import TjamLogo from "../../assets/jpg/tjamlogo.png";

// sc
import {
  HeaderContainer,
  HeaderElement,
  HeaderLogo,
  HeaderLogoWrap,
  HeaderLogoImg,
  HeaderLinks,
  HeaderLinksUL,
  HeaderLinksLI,
  HeaderMenu,
  HeaderMenuSVG,
} from "./Header.styles";

// constants
import { headerConstants } from "./Header.constats";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });
  const { scrollY } = scrollPosition;

  useEffect(() => {
    const getScrollPosition = () => {
      const x = window.pageXOffset || window.scrollLeft;
      const y = window.pageYOffset || window.scrollTop;
      setScrollPosition({ scrollX: x || 0, scrollY: y || 0 });
    };
    const debounced = debounce(getScrollPosition, 250);
    document.addEventListener("scroll", debounced);
    return () => document.removeEventListener("scroll", debounced);
  }, []);

  const { links } = headerConstants;
  const { toggleMenu } = useContext(AppStore);

  return (
    <HeaderContainer scroll={scrollY}>
      <HeaderElement>
        <HeaderLogo onClick={() => jump("#hero")}>
          <HeaderLogoWrap>
            <HeaderLogoImg src={TjamLogo} alt="awsome logo"></HeaderLogoImg>
          </HeaderLogoWrap>
        </HeaderLogo>
        <HeaderLinks>
          <HeaderLinksUL>
            {links.map(({ title, id, action }) => {
              return (
                <HeaderLinksLI key={id}>
                  <Link
                    title={title}
                    action={action}
                    active={id === "homelink" ? 1 : 0}
                  ></Link>
                </HeaderLinksLI>
              );
            })}
          </HeaderLinksUL>
        </HeaderLinks>
        <HeaderMenu>
          <HeaderMenuSVG onClick={() => toggleMenu()} />
        </HeaderMenu>
      </HeaderElement>
    </HeaderContainer>
  );
};

export default Header;
