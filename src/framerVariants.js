//page title component
export const pageTitleVariant = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, type: 'spring', stiffness: 120 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

//characterSelect
export const characterSelectVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, delay: '0.4s', type: 'tween' },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};
//home page
export const homeTextVariant = {
  hidden: { opacity: 0, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.2, type: 'spring', stiffness: 120 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

export const homeImgVariant = {
  hidden: { opacity: 0, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 2, delay: 0.4, type: 'tween' },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

//go to home nav
export const homeNavVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2, delay: '0.4s', type: 'tween' },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};
//character page
export const characterImgVariant = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      easeInOut: [0.17, 0.67, 0.83, 0.67],
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

export const characterDetailVariant = {
  hidden: { opacity: 0, x: '100vw' },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      easeInOut: [0.17, 0.3, 0.7, 0.9],
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};
//multiverse
export const mcCharactersVariant = {
  hidden: { opacity: 0, y: '100vw' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      linear: [],
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

export const mcSelectVariant = {
  hidden: { opacity: 0, y: '-100vw' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      linear: [],
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};
