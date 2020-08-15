import React from 'react';
import { motion } from 'framer-motion';
import { homeTextVariant, homeImgVariant } from '../framerVariants';
export default function HomeHeader() {
  return (
    <div className="homeHeader">
      <motion.p variants={homeTextVariant} initial="hidden" animate="visible">
        “this pickle doesn't care about your children. And I'm not gonna take
        their dreams. I'm gonna take their parents “ - <span>pickle rick</span>
      </motion.p>
      <motion.div
        variants={homeImgVariant}
        initial="hidden"
        animate="visible"
        className="homeHeader-pickle">
        <img
          src={require('../assets/images/picklerick.png')}
          alt="picklerick"
        />
      </motion.div>
    </div>
  );
}
