import React, { useContext } from 'react';
import PageTitle from './PageTitle';
import HomeHeader from './HomeHeader';
import CharacterSelect from './CharacterSelect';
import { mainContext } from '../App';
export default function Home() {
  const { state } = useContext(mainContext);
  console.log('im home fn');
  console.log(state.apiData);
  return (
    <>
      <PageTitle />
      <HomeHeader />
      <CharacterSelect state={state} />
    </>
  );
}
