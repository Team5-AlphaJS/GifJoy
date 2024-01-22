import { q } from "./helpers.js";
import { uploadGif } from "../requests/request-service.js";
import { addUploaded } from "../data/uploaded.js";

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
