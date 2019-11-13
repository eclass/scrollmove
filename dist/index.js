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
const scrollMove = (id, options = { behavior: 'smooth', block: 'center' }) => {
    const element = document.querySelector(id) || null;
    if (element) {
        element.scrollIntoView(options);
    }
};
exports.default = scrollMove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FDakIsRUFBVSxFQUNWLFVBQW1CLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQzFELEVBQUU7SUFDRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQTtJQUNsRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDaEM7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxVQUFVLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zJ1xuXG4vKipcbiAqIE1vdmUgc2Nyb2xsIHNtb290aCB0byBjZW50ZXIgZWxlbWVudCBpZCBzZWxlY3RlZC5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGlkIC0gSWQgb2YgZWxlbWVudCBzZWxlY3RlZC5cbiAqIEBleGFtcGxlXG4gKiBzY3JvbGxNb2RlKCNpZClcbiAqIEByZXR1cm5zIHtudWxsfSBWb2lkLlxuICovXG5jb25zdCBzY3JvbGxNb3ZlID0gKFxuICBpZDogc3RyaW5nLFxuICBvcHRpb25zOiBvcHRpb25zID0geyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnY2VudGVyJyB9XG4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpIHx8IG51bGxcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KG9wdGlvbnMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTW92ZVxuIl19