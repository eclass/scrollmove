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
const scrollMove = (id, options = { behavior: "smooth", block: "center" }) => {
    const element = document.querySelector(id) || null;
    if (element) {
        element.scrollIntoView(options);
    }
};
exports.default = scrollMove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLEdBQUcsQ0FDakIsRUFBVSxFQUNWLFVBQXdCLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQy9ELEVBQUU7SUFDRixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztJQUNuRCxJQUFJLE9BQU8sRUFBRTtRQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakM7QUFDSCxDQUFDLENBQUM7QUFFRixrQkFBZSxVQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcHRpb25zVHlwZXMgfSBmcm9tIFwiLi9vcHRpb25zXCI7XG5cbi8qKlxuICogTW92ZSBzY3JvbGwgc21vb3RoIHRvIGNlbnRlciBlbGVtZW50IGlkIHNlbGVjdGVkLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gaWQgLSBJZCBvZiBlbGVtZW50IHNlbGVjdGVkLlxuICogQGV4YW1wbGVcbiAqIHNjcm9sbE1vZGUoI2lkKVxuICogQHJldHVybnMge251bGx9IFZvaWQuXG4gKi9cbmNvbnN0IHNjcm9sbE1vdmUgPSAoXG4gIGlkOiBzdHJpbmcsXG4gIG9wdGlvbnM6IG9wdGlvbnNUeXBlcyA9IHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcImNlbnRlclwiIH1cbikgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCkgfHwgbnVsbDtcbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KG9wdGlvbnMpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzY3JvbGxNb3ZlO1xuIl19