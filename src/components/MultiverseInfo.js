import React, { useContext, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import MultiverseCharacter from './MultiverseCharacter';
import { mainContext } from '../App';
import { UPDATE_MC_DATA, UPDATE_MC_LOADING } from '../types';
export default function MultiverseInfo({ item, name }) {
  let { state, dispatch } = useContext(mainContext);
  let mcNav = [];
  let history = useHistory();
  for (let [key] of Object.entries(state.myData)) {
    let imgSrc = require(`../assets/images/icons/${key}Icon.png`);
    if (key !== 'mrpoopy' && key !== 'mrmeeseeks') {
      mcNav.push(
        <div
          key={key}
          onClick={() => {
            history.push(`/multiverse/${key}`);
          }}
          className="multiverseNavIcon ">
          <img className={name === key && 'selected'} src={imgSrc} alt="key" />
        </div>
      );
    }
  }
  const observer = useRef();
  const lastCharacterRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let url = state.mcData[name].info.next;
        if (url) {
          async function getData() {
            try {
              dispatch({
                type: UPDATE_MC_LOADING,
                payload: true,
              });
              let data = await fetch(`${url}`);
              let res = await data.json();
              dispatch({
                type: UPDATE_MC_DATA,
                payload: { data: res, name: name },
              });
              if (!data.res.info.next) {
                dispatch({
                  type: UPDATE_MC_LOADING,
                  payload: false,
                });
              }
            } catch (e) {
              console.log(e);
            }
          }
          getData();
        }
      }
    });
    if (node) observer.current.observe(node);
  });
  let elements = [];
  if (typeof item != 'undefined') {
    elements = item.results.map((element, index) => {
      if (item.results.length === index + 1) {
        return (
          <MultiverseCharacter
            ref1={lastCharacterRef}
            loading={state.mcLoading}
            item={element}
          />
        );
      } else {
        return <MultiverseCharacter item={element} />;
      }
    });
  }

  return (
    <div className="multiverseInfo">
      <div className="multiverseNav">{mcNav}</div>
      <div className="multiverseCharacters">{elements}</div>
    </div>
  );
}
