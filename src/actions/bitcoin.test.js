import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { bpi: 'bitcoin price index' }};

const API = 'https://api.coindesk.com/v1/bpi/currentprice.json';
fetchMock.get(API, mockResponse);

it('creates an async action to fetch the bitcoin value', () => {
  const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];

  store.dispatch(fetchBitcoin()).then(() => {
    expectedActions(store.getActions()).toEqual(expectedActions);
  });
});