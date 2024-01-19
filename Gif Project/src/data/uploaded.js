let uploaded = JSON.parse(localStorage.getItem('uploaded')) || [];


export const addUploaded = (gifId) => {
    uploaded.push(gifId);
    localStorage.setItem('uploaded', JSON.stringify(uploaded));
}

export const getUploaded = () => [...uploaded];