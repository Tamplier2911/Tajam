// import "./Link.scss";
import React from "react";

// sc
import { LinkWrap, LinkElement } from "./Link.styles";

const Link = ({ title, action, href, active }) => {
  return (
    <LinkWrap>
      <LinkElement
        active={active}
        href={href ? href : ""}
        onClick={action ? (e) => action(e) : (e) => e.preventDefault()}
      >
        {title}
      </LinkElement>
    </LinkWrap>
  );
};

export default Link;
