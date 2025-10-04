"use client";
const useImageKit = () => {
    const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
    const privateKey = process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY;
    // const urlEndpoint = `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}`;
    const sendData = async (file) => {
        if (!publicKey) {
            throw new Error("ImageKit public key is not defined in environment variables.");
        }
        // Never expose your private key in client-side code. If you don't have a private key
        // available on the server, instruct the caller to use a server-side upload endpoint.
        if (!privateKey) {
            // If there's no private key available in the client, POST the file to a server
            // endpoint which can safely use the private key to forward the upload to ImageKit.
            try {
                const forwardForm = new FormData();
                forwardForm.append('file', file);
                const resp = await fetch('/api/upload', {
                    method: 'POST',
                    body: forwardForm,
                });
                if (!resp.ok) {
                    const text = await resp.text().catch(() => '');
                    return { success: false, error: new Error(`Server upload failed: ${resp.status} ${resp.statusText} - ${text}`) };
                }
                const data = await resp.json();
                return { success: data.success, data };
            }
            catch (err) {
                return { success: false, error: err };
            }
        }
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", file.name || "upload");
        try {
            // ImageKit expects authentication using the private key. This code will only run
            // if a privateKey is present (note: exposing privateKey in client code is insecure).
            const basicAuth = typeof btoa === "function"
                ? `Basic ${btoa(`${privateKey}:`)}`
                : `Basic ${Buffer.from(`${privateKey}:`).toString("base64")}`;
            const response = await fetch("https://upload.imagekit.io/api/v1/files/upload", {
                method: "POST",
                headers: {
                    Authorization: basicAuth,
                },
                body: formData,
            });
            if (!response.ok) {
                const text = await response.text().catch(() => "");
                return {
                    success: false,
                    error: new Error(`Error uploading image: ${response.status} ${response.statusText} - ${text}`),
                };
            }
            const data = await response.json();
            return { success: true, data };
        }
        catch (error) {
            return { success: false, error };
        }
    };
    const fetchPhotos = async () => {
        if (!publicKey) {
            throw new Error("ImageKit public key is not defined in environment variables.");
        }
        try {
            const response = await fetch(`https://api.imagekit.io/v1/files`, {
                method: "GET",
                headers: {
                    Authorization: `Basic ${btoa(`${privateKey}:`)}`,
                },
            });
            if (!response.ok) {
                const text = await response.text().catch(() => "");
                throw new Error(`Error fetching photos: ${response.status} ${response.statusText} - ${text}`);
            }
            const data = await response.json();
            return { success: true, data };
        }
        catch (error) {
            return { success: false, error };
        }
    };
    return { sendData, fetchPhotos };
};
export default useImageKit;
