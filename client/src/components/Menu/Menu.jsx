// import "./Menu.scss";
import React, { useContext } from "react";
import ReactDOM from "react-dom";

// context
import AppStore from "../../contexts/GlobalContext/globalContext";

// components
import Link from "../Link/Link";

// sc
import {
  MenuContainer,
  MenuButton,
  MenuIconSVG,
  MenuBlock,
  MenuBlockUL,
  MenuBlockLI,
} from "./Menu.styles";

// constants
import { menuConstants } from "./Menu.constants";

const Menu = () => {
  const { menulinks } = menuConstants;
  const {
    menu: { menuHidden },
    toggleMenu,
  } = useContext(AppStore);

  return ReactDOM.createPortal(
    menuHidden ? null : (
      <MenuContainer>
        <MenuButton onClick={() => toggleMenu()}>
          <MenuIconSVG />
        </MenuButton>
        <MenuBlock>
          <MenuBlockUL>
            {menulinks.map(({ id, title, action }) => {
              return (
                <MenuBlockLI key={id}>
                  <Link
                    title={title}
                    action={(e) => {
                      action(e);
                      toggleMenu();
                    }}
                  />
                </MenuBlockLI>
              );
            })}
          </MenuBlockUL>
        </MenuBlock>
      </MenuContainer>
    ),
    document.querySelector("#menu")
  );
};

export default Menu;
