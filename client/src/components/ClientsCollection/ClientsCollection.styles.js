import styled from "styled-components";

export const ClientsCollectionContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-items: left;
  grid-column-gap: 6rem;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    grid-column-gap: 2rem;
  }

  @media only screen and (max-width: 325px) {
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    grid-column-gap: 0rem;
  }
`;

export const ClientsCollectionImgWrap = styled.div`
  height: 8rem;
  width: 8rem;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    height: 6rem;
    width: 6rem;
  }

  @media only screen and (max-width: 375px) {
    height: 5rem;
    width: 5rem;
  }

  @media only screen and (max-width: 325px) {
    height: 4rem;
    width: 4rem;
  }
`;

export const ClientsCollectionImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
