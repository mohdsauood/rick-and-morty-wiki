import React, { useContext, useEffect } from 'react';
import PageTitle from './PageTitle';
import HomeHeader from './HomeHeader';
import { SET_DARKEN } from '../types';
import CharacterSelect from './CharacterSelect';
import { mainContext } from '../App';
export default function Home() {
  const { state, dispatch } = useContext(mainContext);
  useEffect(() => {
    dispatch({ type: SET_DARKEN, payload: false });
  }, [dispatch]);

  return (
    <>
      <PageTitle title="Character Wiki" />
      <HomeHeader />
      <CharacterSelect state={state} />
    </>
  );
}
