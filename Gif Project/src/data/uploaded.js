/**
 * Represents an array of uploaded GIFs.
 * @type {Array<string>}
 */
const uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF ID to the uploaded array and stores it in the local storage.
 * @param {string} gifId - The ID of the GIF to be added.
 * @return {void}
 */
export const addUploaded = (gifId) => {
    uploaded.push(gifId);
    localStorage.setItem('uploaded', JSON.stringify(uploaded));
};

/**
 * Retrieves a copy of the uploaded array.
 * @return {Array<string>} - A copy of the uploaded array.
 */
export const getUploaded = () => [...uploaded];
