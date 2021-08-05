import { DECREMENT, INCREMENT, SET } from './actions';

export const initialState = { count: 400 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { count: parseInt(++state.count) };
  }

  if (action.type === DECREMENT) {
    return { count: --state.count };
  }

  if (action.type === SET) {
    return { count: parseInt(action.payload) };
  }

  return state;
};
