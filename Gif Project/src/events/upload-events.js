import { q } from "./helpers.js";
import { uploadGif } from "../requests/request-service.js";
import { addUploaded } from "../data/uploaded.js";

/**
 * Handles the upload event when a GIF file is selected.
 * @param {Event} ev - The event object.
 * @return {Promise<void>} - A promise that resolves when the upload is complete.
 */
export const onUpload = async (ev) => {
    ev.preventDefault();

    const fileInput = q('input[name="gif-file"]');
    const gifFile = fileInput.files[0];

    const formData = new FormData();
    formData.append('file', gifFile);

    const response = await uploadGif(formData);
    const uploadedId = response.data.id;

    addUploaded(uploadedId);
};
