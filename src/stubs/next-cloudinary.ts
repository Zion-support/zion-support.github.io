// Next.js Cloudinary stub for Vite compatibility
import React from 'react';

export const CldImage = ({ src, alt, width, height, ...props }: any) => {
  return React.createElement('img', {
    src,
    alt,
    width,
    height,
    ...props,
  });
};

export const CldVideo = ({ src, ...props }: any) => {
  return React.createElement('video', {
    src,
    ...props,
  });
};

export const CldUploadWidget = ({ children, ...props }: any) => {
  return children({ cloudinary: { open: () => {} } });
};

export const CldUploadButton = ({ children, onUpload, uploadPreset, ...props }: any) => {
  const handleClick = () => {
    // Mock upload functionality
    const mockResult = {
      info: {
        secure_url: 'https://via.placeholder.com/150'
      }
    };
    onUpload?.(mockResult);
  };

  return React.createElement('button', {
    onClick: handleClick,
    ...props,
  }, children);
};

export default {
  CldImage,
  CldVideo,
  CldUploadWidget,
  CldUploadButton,
};