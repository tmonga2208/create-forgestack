import { NextResponse } from 'next/server';
export async function POST(req) {
    try {
        const privateKey = process.env.IMAGEKIT_PRIVATE_KEY || process.env.NEXT_PRIVATE_IMAGEKIT_KEY || process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY;
        if (!privateKey) {
            return NextResponse.json({ success: false, error: 'ImageKit private key not configured on server.' }, { status: 500 });
        }
        const form = await req.formData();
        const file = form.get('file');
        if (!file) {
            return NextResponse.json({ success: false, error: 'No file provided.' }, { status: 400 });
        }
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        // Create a new FormData for forwarding to ImageKit
        const forwardForm = new FormData();
        // In the server environment the global File/Blob constructors are available in Next.js
        forwardForm.append('file', new Blob([buffer]), file.name || 'upload');
        const auth = `Basic ${Buffer.from(`${privateKey}:`).toString('base64')}`;
        const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
            method: 'POST',
            headers: {
                Authorization: auth,
            },
            body: forwardForm,
        });
        const text = await response.text();
        try {
            const data = JSON.parse(text);
            return NextResponse.json({ success: response.ok, data, status: response.status }, { status: response.status });
        }
        catch {
            return NextResponse.json({ success: response.ok, raw: text }, { status: response.status });
        }
    }
    catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
