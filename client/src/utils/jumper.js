import jump from "jump.js";

export const jumper = (target, offset) => {
  return target
    ? (e) => {
        e.preventDefault();
        jump(target, { offset: offset || 0 });
      }
    : (e) => e.preventDefault();
};
