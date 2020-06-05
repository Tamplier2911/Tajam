import styled, { css } from "styled-components";

// svg
import { ReactComponent as SendSVG } from "../../assets/svg/send.svg";
import { ReactComponent as DeleteSVG } from "../../assets/svg/cleaning.svg";

const buttonStyle = css`
  display: grid;
  align-items: center;
`;

const svgStyle = css`
  cursor: pointer;
  width: 3rem;
  height: 3rem;

  transition: fill 0.3s;
  &:hover {
    fill: var(--cl-tertiary);
  }
`;

export const MessageFormContainer = styled.div`
  display: grid;
`;

export const MessageFormElement = styled.form`
  display: grid;
  grid-template-columns: 1fr repeat(2, min-content);
  grid-column-gap: 1rem;
`;

export const MessageFormWipe = styled.div`
  ${buttonStyle}
`;
export const MessageFormWipeSVG = styled(DeleteSVG)`
  ${svgStyle}
`;

export const MessageFormLabel = styled.label`
  ${buttonStyle}
`;
export const MessageFormLabelSVG = styled(SendSVG)`
  ${svgStyle}
`;

export const MessageFormSubmit = styled.input`
  display: none;
`;
