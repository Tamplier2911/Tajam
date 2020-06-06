// import "./SectionTestimonials.scss";
import React, { useContext } from "react";

// context
import TestimonialsStore from "../../contexts/TestimonialsContxt/TestimonialsContext";

// sc
import {
  SectionTestimonialsContainer,
  SectionTestimonialsWrap,
  SectionTestimonialsQuote,
  SectionTestimonialsSign,
  SectionTestimonialsReview,
  SectionTestimonialsText,
  SectionTestimonialsInfo,
  SectionTestimonialsName,
  SectionTestimonialsPos,
  SectionTestimonialsPeople,
  SectionTestimonialsArrLeft,
  SectionTestimonialsImgBar,
  SectionTestimonialsAvatarWrap,
  SectionTestimonialsAvatarImg,
  SectionTestimonialsArrRight,
} from "./SectionTestimonials.styles";

// constants
import { sectionTestimonialsConstants } from "./SectionTestimonials.constats";
//
const SectionTestimonials = () => {
  const { images, people } = sectionTestimonialsConstants;

  const {
    testimonials: { current },
    setTestimonialNext,
    setTestimonialPrev,
  } = useContext(TestimonialsStore);

  const { name, position, review } = people[current];

  return (
    <SectionTestimonialsContainer id="testimonials">
      <SectionTestimonialsWrap>
        <SectionTestimonialsQuote>
          <SectionTestimonialsSign />
        </SectionTestimonialsQuote>
        <SectionTestimonialsReview>
          <SectionTestimonialsText>{review}</SectionTestimonialsText>
        </SectionTestimonialsReview>
        <SectionTestimonialsInfo>
          <SectionTestimonialsName>{name}</SectionTestimonialsName>
          <SectionTestimonialsPos>{position}</SectionTestimonialsPos>
        </SectionTestimonialsInfo>
        <SectionTestimonialsPeople>
          <SectionTestimonialsArrLeft onClick={() => setTestimonialPrev()} />
          <SectionTestimonialsImgBar>
            {images.map((imgObj, i) => {
              const { id, image } = imgObj;
              return (
                <SectionTestimonialsAvatarWrap
                  key={id}
                  active={current === i ? 1 : 0}
                >
                  <SectionTestimonialsAvatarImg src={image} alt="happy user" />
                </SectionTestimonialsAvatarWrap>
              );
            })}
          </SectionTestimonialsImgBar>
          <SectionTestimonialsArrRight onClick={() => setTestimonialNext()} />
        </SectionTestimonialsPeople>
      </SectionTestimonialsWrap>
    </SectionTestimonialsContainer>
  );
};

export default SectionTestimonials;
