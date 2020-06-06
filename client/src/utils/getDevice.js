export const getDevice = ({ width }) => {
  if (width > 1024) {
    return "screen";
  } else if (width > 768 && width <= 1024) {
    return "laptop";
  } else if (width > 425 && width <= 768) {
    return "tablet";
  } else if (width <= 425) {
    return "phone";
  }
};
