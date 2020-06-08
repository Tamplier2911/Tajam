export const dateConverter = (date, location = "en-GB") => {
  return new Date(date).toLocaleString(location, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};
