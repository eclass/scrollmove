import { optionsType } from './options'

/**
 * Move scroll smooth to center element id selected.
 *
 * @param {string} id - Id of element selected.
 * @param {Object} options - Options fot scrollIntoView.
 * @param {string} options.behavior - Behavior.
 * @param {string} options.block - Block.
 * @param {string} options.inline - Inline.
 * @example scrollMode(#id)
 * @returns {null} Void.
 */
const scrollMove = (
  id: string,
  options: optionsType = { behavior: 'smooth', block: 'center' }
): void => {
  const element = document.querySelector(id) || null
  if (element) {
    element.scrollIntoView(options)
  }
}

export default scrollMove
