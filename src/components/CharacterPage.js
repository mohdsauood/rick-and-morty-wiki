import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterSelect from './CharacterSelect';
import PageTitle from './PageTitle';
import { mainContext } from '../App';
import { SET_DARKEN, SET_CHARACTER_API_DATA } from '../types';
import HomeNav from './HomeNav';
import CharacterInfo from './CharacterInfo';
export default function CharacterPage() {
  let { state, dispatch } = useContext(mainContext);
  let { name } = useParams();
  let id = getId(name);

  useEffect(() => {
    dispatch({ type: SET_DARKEN, payload: true });
    async function getData() {
      if (!state.apiData.name) {
        try {
          let data = await fetch(
            `https://rickandmortyapi.com/api/character/${id}`
          );
          let res = await data.json();
          dispatch({
            type: SET_CHARACTER_API_DATA,
            payload: { data: res, name: name },
          });
        } catch (e) {
          console.log(e);
        }
      } else {
        getData();
      }
    }
  }, [dispatch, id, name]);
  return (
    <>
      <PageTitle title="Main Characters" color="orange" />
      <HomeNav />
      <CharacterInfo />
      <CharacterSelect state={state} />
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
      return 3;
    case 'jerry':
      return 4;
    case 'summer':
      return 5;
    case 'mrmeeseeks':
      return 244;
    case 'mrpoopy':
      return 242;
    default:
      return null;
  }
}
