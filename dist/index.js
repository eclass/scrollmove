"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Move scroll smooth to center element id selected.
 *
 * @param  {string} id - Id of element selected.
 * @example
 * scrollMode(#id)
 * @returns {null} Void.
 */
const scrollMove = (id) => {
    const element = document.querySelector(id) || null;
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
};
exports.default = scrollMove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FBQyxFQUFVLEVBQUUsRUFBRTtJQUNoQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNuRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ2pFO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb3ZlIHNjcm9sbCBzbW9vdGggdG8gY2VudGVyIGVsZW1lbnQgaWQgc2VsZWN0ZWQuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBpZCAtIElkIG9mIGVsZW1lbnQgc2VsZWN0ZWQuXG4gKiBAZXhhbXBsZVxuICogc2Nyb2xsTW9kZSgjaWQpXG4gKiBAcmV0dXJucyB7bnVsbH0gVm9pZC5cbiAqL1xuY29uc3Qgc2Nyb2xsTW92ZSA9IChpZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKSB8fCBudWxsO1xuICBpZiAoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwiY2VudGVyXCIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE1vdmU7XG4iXX0=