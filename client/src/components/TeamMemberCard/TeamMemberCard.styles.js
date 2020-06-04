import styled from "styled-components";

const getRespectivePosition = ({ index }) => {
  if (index === 0) {
    return `
    @media only screen and (max-width: 1107px){
        
    }`;
  } else if (index === 1) {
    return ``;
  } else if (index === 2) {
    return ``;
  } else if (index === 3) {
    return `
    @media only screen and (max-width: 1107px){
        grid-column: 2 / 3;
    }
    @media only screen and (max-width: 837px){
        grid-column: auto;
    }
    @media only screen and (max-width: 768px){
        grid-column: 2 / 3;
    }
    @media only screen and (max-width: 611px){
        grid-column: auto;
    }
    `;
  }
};

export const TeamMemberCardFigure = styled.figure`
  ${getRespectivePosition}
  display: grid;
  border: 0.1rem solid var(--cl-fontB);
`;

export const TeamMemberImgWrapper = styled.div`
  height: 35rem;

  @media only screen and (max-width: 837px) {
    height: 25rem;
  }
`;

export const TeamMemberImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TeamMemberInfo = styled.div`
  display: grid;
  justify-items: center;
  padding: 2rem 0rem;
`;

export const TeamMemberName = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  white-space: nowrap;
`;

export const TeamMemberPosition = styled.div`
  font-size: 1.5rem;
  white-space: nowrap;
  color: var(--cl-fontW);
`;
