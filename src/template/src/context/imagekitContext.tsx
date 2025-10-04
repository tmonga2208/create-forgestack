"use client"
import * as React from "react"
import { ImageKitProvider } from '@imagekit/next';

export function ImageProvider({
    children,
}: React.PropsWithChildren) {
    return (
        <ImageKitProvider urlEndpoint={`https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!}`}>
            {children}
        </ImageKitProvider>
    )
}   