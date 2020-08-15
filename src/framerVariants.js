export const pageTitleVariant = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: '0.2s', type: 'spring', stiffness: 120 },
  },
};

export const homeTextVariant = {
  hidden: { opacity: 0, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: '0.2s', type: 'spring', stiffness: 120 },
  },
};

export const homeImgVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, delay: '0.4s', type: 'tween' },
  },
};
