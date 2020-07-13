import React from 'react';
import PageTitle from './PageTitle';
import HomeHeader from './HomeHeader';
import CharacterSelect from './CharacterSelect';

export default function Home() {
  return (
    <>
      <PageTitle />
      <HomeHeader />
      <CharacterSelect />
    </>
  );
}
