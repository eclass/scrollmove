import { optionsTypes } from "./options";

/**
 * Move scroll smooth to center element id selected.
 *
 * @param  {string} id - Id of element selected.
 * @example
 * scrollMode(#id)
 * @returns {null} Void.
 */
const scrollMove = (
  id: string,
  options: optionsTypes = { behavior: "smooth", block: "center" }
) => {
  const element = document.querySelector(id) || null;
  if (element) {
    element.scrollIntoView(options);
  }
};

export default scrollMove;
