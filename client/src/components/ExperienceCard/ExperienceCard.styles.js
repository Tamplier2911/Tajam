import styled from "styled-components";

const cosumizeBorers = ({ index }) => {
  if (index === 0) {
    return `
      border-bottom: solid 0.1rem var(--cl-fontW);
      border-right: solid 0.1rem var(--cl-fontW);
      
      @media only screen and (max-width: 582px){
        border none;
      }
    `;
  } else if (index === 1) {
    return `
      border-bottom: solid 0.1rem var(--cl-fontW);
      @media only screen and (max-width: 582px){
        border none;
      }
    `;
  } else if (index === 2) {
    return `
      border-bottom: solid 0.1rem var(--cl-fontW);
      border-left: solid 0.1rem var(--cl-fontW);
      @media only screen and (max-width: 947px){
        border-left none;
        border-right: solid 0.1rem var(--cl-fontW);
      }
      @media only screen and (max-width: 582px){
        border none;
      }
    `;
  } else if (index === 3) {
    return `
      border-right: solid 0.1rem var(--cl-fontW);
      @media only screen and (max-width: 947px){
        border-right: none;
        border-bottom: solid 0.1rem var(--cl-fontW);
      }
      @media only screen and (max-width: 582px){
        border none;
      }
    `;
  } else if (index === 4) {
    return `
      border-right: solid 0.1rem var(--cl-fontW);
      @media only screen and (max-width: 582px){
        border none;
      }
    `;
  } else if (index === 5) {
    return `
      border-left: solid 0.1rem var(--cl-fontW);
      @media only screen and (max-width: 947px){
        border-left: none;
      }
      @media only screen and (max-width: 582px){
        border none;
      }
    `;
  }
};

export const CardContainer = styled.div`
  ${cosumizeBorers}
  display: grid;
  grid-row-gap: 1.2rem;
  padding: 3rem;
  text-align: center;

  @media only screen and (max-width: 582px) {
    padding: 1rem;
  }
`;

export const CardSvgWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding: 1rem 0rem;

  & > svg {
    width: 6.5rem;
    height: 6.5rem;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.6rem;
  text-transform: uppercase;
`;

export const CardText = styled.p`
  font-size: 1.5rem;
  color: var(--cl-fontB);
`;
