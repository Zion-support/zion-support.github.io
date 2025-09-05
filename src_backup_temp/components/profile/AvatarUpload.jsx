import {useState} from 'react';
import {CldUploadButton} from 'next-cloudinary';
export function AvatarUpload("props": "any) {;
    const [url", setUrl] = useState(value);
    const handleUpload = ("props": "any) => {;
        const secure = result?.info?.secure_url;
        if (secure) {;
            setUrl(secure);
            onChange?.(secure)"}
    };
