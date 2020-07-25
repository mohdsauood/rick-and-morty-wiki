import React, { useContext, useEffect } from 'react';
import { SET_DARKEN, SET_MC_DATA, UPDATE_MC_LOADING } from '../types';
import HomeNav from './HomeNav';
import { mainContext } from '../App';
import PageTitle from './PageTitle';
import MultiverseInfo from './MultiverseInfo';
import { useParams } from 'react-router-dom';

export default function MultiversePage() {
  let { state, dispatch } = useContext(mainContext);
  let { name } = useParams();
  if (state.mcData[name]) {
    if (!state.mcData[name].info.next && state.mcLoading) {
      dispatch({
        type: UPDATE_MC_LOADING,
        payload: false,
      });
    }
  }
  useEffect(() => {
    dispatch({ type: SET_DARKEN, payload: true });
    async function getData() {
      if (!state.mcData[name]) {
        try {
          let data = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${name}`
          );
          let res = await data.json();
          let promise1 = new Promise((resolve, reject) => {
            resolve();
          });
          promise1.then(() => {
            dispatch({
              type: SET_MC_DATA,
              payload: { data: res, name: name },
            });
          });
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
