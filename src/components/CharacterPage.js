import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterSelect from './CharacterSelect';
import PageTitle from './PageTitle';
import { mainContext } from '../App';
import { SET_DARKEN } from '../types';
import HomeNav from './HomeNav';
export default function CharacterPage() {
  let { state, dispatch } = useContext(mainContext);
  let { name } = useParams();
  useEffect(() => {
    dispatch({ type: SET_DARKEN, payload: true });
  }, [dispatch]);
  return (
    <>
      <PageTitle title="Main Characters" color="orange" />
      <HomeNav />
      <CharacterSelect state={state} />
    </>
  );
}
