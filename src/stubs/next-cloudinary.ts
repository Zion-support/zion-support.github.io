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

export default {
  CldImage,
  CldVideo,
  CldUploadWidget,
};