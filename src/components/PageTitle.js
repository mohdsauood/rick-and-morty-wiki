import React from 'react';
import { motion } from 'framer-motion';
export default function PageTitle({ title, color }) {
  return (
    <motion.div className="pageTitle">
      <h2 className={color}>{title}</h2>
    </motion.div>
  );
}
