import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "movie/CHANGE_INPUT";

export const changeInput = createAction(CHANGE_INPUT, text => text);

const initialState = {
  input: ""
};

export default handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      input: action.payload
    })
  },
  initialState
);
