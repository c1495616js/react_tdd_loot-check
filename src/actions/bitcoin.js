import { FETCH_BITCOIN } from './constants';

const API = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const fetchBitcoin = () => {
  return dispatch => {
    return fetch(API)
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_BITCOIN, bitcoin: json }))
      .catch(e => console.log(e));
  }
};