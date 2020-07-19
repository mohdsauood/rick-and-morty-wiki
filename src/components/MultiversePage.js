import React, { useContext, useEffect } from 'react';
import { SET_DARKEN, SET_MC_DATA } from '../types';
import HomeNav from './HomeNav';
import { mainContext } from '../App';
import PageTitle from './PageTitle';
import MultiverseInfo from './MultiverseInfo';
import { useParams } from 'react-router-dom';

export default function MultiversePage() {
  let { state, dispatch } = useContext(mainContext);
  let { name } = useParams();
  useEffect(() => {
    console.log(name);
    dispatch({ type: SET_DARKEN, payload: true });
    async function getData() {
      if (!state.mcData[name]) {
        try {
          let data = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${name}`
          );
          let res = await data.json();
          dispatch({
            type: SET_MC_DATA,
            payload: { data: res, name: name },
          });
          console.log('im result below');
          console.log(res);
        } catch (e) {
          console.log(e);
        }
      }
    }
    getData();
  }, [dispatch, name, state.mcData]);
  return (
    <>
      <PageTitle title="Multi-Verse" color="orange" />
      <HomeNav />
      <MultiverseInfo item={state.mcData[name]} name={name} />
    </>
  );
}
