import React from 'react';
import { motion } from 'framer-motion';
import { characterImgVariant, characterDetailVariant } from '../framerVariants';
export default function CharacterInfo({
  character = {},
  myCharacter,
  characterName,
  loading,
}) {
  let img = require(`../assets/images/${characterName}.png`);
  let loader = <p class="mcLoading smallLoading">loading...</p>;
  return (
    <div className="characterInfo">
      <motion.div
        variants={characterImgVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-img">
        {loading ? loader : <img src={`${img}`} alt={`${characterName}`} />}
      </motion.div>
      <motion.div
        variants={characterDetailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-name">
        Name
      </motion.div>
      <motion.div
        variants={characterDetailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-name-data">
        {loading ? loader : character.name}
      </motion.div>
      <motion.div
        variants={characterDetailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-species">
        Species
      </motion.div>
      <motion.div
        variants={characterDetailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-species-data">
        {loading ? loader : character.species}
      </motion.div>
      <motion.div
        variants={characterDetailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-wordings">
        Famous Wordings
      </motion.div>
      <motion.div
        variants={characterDetailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-wordings-data">
        {myCharacter.quote}
      </motion.div>
      <motion.div
        variants={characterDetailVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="characterInfo-about">
        {myCharacter.about}
      </motion.div>
    </div>
  );
}
