import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterSelect from './CharacterSelect';
import PageTitle from './PageTitle';
import { mainContext } from '../App';
import {
  SET_DARKEN,
  SET_CHARACTER_API_DATA,
  UPDATE_API_DATA_LOADING,
} from '../types';
import HomeNav from './HomeNav';
import CharacterInfo from './CharacterInfo';
export default function CharacterPage() {
  let { state, dispatch } = useContext(mainContext);
  let { name } = useParams();
  let id = getId(name);
  console.log(state.apiDataLoading);

  useEffect(() => {
    dispatch({ type: SET_DARKEN, payload: true });
    async function getData() {
      if (!state.apiData[name]) {
        dispatch({ type: UPDATE_API_DATA_LOADING, payload: true });
        try {
          let data = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`
          );
          let res = await data.json();
          dispatch({
            type: SET_CHARACTER_API_DATA,
            payload: { data: res, name: name },
          });
          dispatch({ type: UPDATE_API_DATA_LOADING, payload: false });
        } catch (e) {
          console.log(e);
        }
      }
    }
    getData();
    // eslint-disable-next-line
  }, [dispatch, id, name]);
  return (
    <>
      <PageTitle title="Main Characters" color="orange" />
      <HomeNav />
      <CharacterInfo
        characterName={name}
        character={state.apiData[name]}
        myCharacter={state.myData[name]}
        loading={state.apiDataLoading}
      />
      <CharacterSelect state={state} param={name} />
    </>
  );
}

function getId(name) {
  switch (name) {
    case 'rick':
      return 1;
    case 'morty':
      return 2;
    case 'beth':
      return 4;
    case 'jerry':
      return 5;
    case 'summer':
      return 3;
    case 'mrmeeseeks':
      return 242;
    case 'mrpoopy':
      return 244;
    default:
      return null;
  }
}
