export const whenFocused = (e) => {
  e.target.style.borderColor = "rgb(240, 125, 125)";
  e.target.style.outline = "none";
};
export const whenBlurred = (e) => {
  e.target.style.borderColor = "gray";
};
