"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const scrollMove = (id, options = { behavior: 'smooth', block: 'center' }) => {
    const element = document.querySelector(id) || null;
    if (element) {
        element.scrollIntoView(options);
    }
};
exports.default = scrollMove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FDakIsRUFBVSxFQUNWLFVBQXVCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQ3hELEVBQUU7SUFDUixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQTtJQUNsRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDaEM7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxVQUFVLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcHRpb25zVHlwZSB9IGZyb20gJy4vb3B0aW9ucydcblxuLyoqXG4gKiBNb3ZlIHNjcm9sbCBzbW9vdGggdG8gY2VudGVyIGVsZW1lbnQgaWQgc2VsZWN0ZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gSWQgb2YgZWxlbWVudCBzZWxlY3RlZC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyBmb3Qgc2Nyb2xsSW50b1ZpZXcuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5iZWhhdmlvciAtIEJlaGF2aW9yLlxuICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMuYmxvY2sgLSBCbG9jay5cbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmlubGluZSAtIElubGluZS5cbiAqIEBleGFtcGxlIHNjcm9sbE1vZGUoI2lkKVxuICogQHJldHVybnMge251bGx9IFZvaWQuXG4gKi9cbmNvbnN0IHNjcm9sbE1vdmUgPSAoXG4gIGlkOiBzdHJpbmcsXG4gIG9wdGlvbnM6IG9wdGlvbnNUeXBlID0geyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9XG4pOiB2b2lkID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpIHx8IG51bGxcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KG9wdGlvbnMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTW92ZVxuIl19