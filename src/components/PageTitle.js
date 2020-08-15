import React from 'react';
import { motion } from 'framer-motion';
import { pageTitleVariant } from '../framerVariants';
export default function PageTitle({ title, color }) {
  return (
    <motion.div
      variants={pageTitleVariant}
      initial="hidden"
      animate="visible"
      className="pageTitle">
      <h2 className={color}>{title}</h2>
    </motion.div>
  );
}
