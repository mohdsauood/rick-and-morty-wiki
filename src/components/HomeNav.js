import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { homeNavVariant } from '../framerVariants';
export default function HomeNav() {
  return (
    <motion.div
      variants={homeNavVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="homeNav">
      <Link to="/">home</Link>
    </motion.div>
  );
}
