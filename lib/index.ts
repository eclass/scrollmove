/**
 * Move scroll smooth to center element id selected.
 *
 * @param  {string} id - Id of element selected.
 * @example
 * scrollMode(#id)
 * @returns {null} Void.
 */
const scrollMove = (id: string) => {
  const element = document.querySelector(id) || null;
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

export default scrollMove;
