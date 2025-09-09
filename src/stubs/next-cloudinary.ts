// Next.js Cloudinary stub for Vite compatibility
export const CldImage = ({ src, alt, width, height, ...props }: any) => {
  return {
    type: 'img',
    props: {
      src,
      alt,
      width,
      height,
      ...props,
    },
  };
};

export const CldVideo = ({ src, ...props }: any) => {
  return {
    type: 'video',
    props: {
      src,
      ...props,
    },
  };
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

  return {
    type: 'button',
    props: {
      onClick: handleClick,
      ...props,
      children
    }
  };
};

export default {
  CldImage,
  CldVideo,
  CldUploadWidget,
  CldUploadButton,
};