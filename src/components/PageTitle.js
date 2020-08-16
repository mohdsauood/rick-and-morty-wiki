import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleVariant } from '../framerVariants';
export default function PageTitle({ title, color }) {
  return (
    <motion.div
      drag
      variants={pageTitleVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="pageTitle">
      <h2 className={color}>{title}</h2>
    </motion.div>
  );
}
