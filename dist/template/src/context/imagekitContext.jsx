"use client";
import { ImageKitProvider } from '@imagekit/next';
export function ImageProvider({ children, }) {
    return (<ImageKitProvider urlEndpoint={`https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}`}>
            {children}
        </ImageKitProvider>);
}
