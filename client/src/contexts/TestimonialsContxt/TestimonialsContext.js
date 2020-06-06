import React, { createContext, useState } from "react";

const Context = createContext({});

export const TestimonialsContext = ({ children }) => {
  const [testimonialsState, setTestimonialsState] = useState({
    testimonials: {
      current: 2,
    },
  });
  const { testimonials } = testimonialsState;

  const setTestimonialNext = () => {
    const { current } = testimonials;
    if (current === 4) {
      setTestimonialsState({
        ...testimonialsState,
        testimonials: { current: 0 },
      });
    } else {
      setTestimonialsState({
        ...testimonialsState,
        testimonials: { current: current + 1 },
      });
    }
  };

  const setTestimonialPrev = () => {
    const { current } = testimonials;
    if (current === 0) {
      setTestimonialsState({
        ...testimonialsState,
        testimonials: { current: 4 },
      });
    } else {
      setTestimonialsState({
        ...testimonialsState,
        testimonials: { current: current - 1 },
      });
    }
  };

  return (
    <Context.Provider
      value={{
        testimonials,
        setTestimonialNext,
        setTestimonialPrev,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
