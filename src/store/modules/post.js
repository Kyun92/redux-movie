import { handleActions, createAction } from "redux-actions";
import axios from "axios";

const getPostAPI = content => {
  content === ""
    ? axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=b6cf942411531af0d1635061b75f82a6&language=ko-Kr&page=1&include_adult=true`
      )
    : axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=b6cf942411531af0d1635061b75f82a6&language=ko-Kr&page=1&include_adult=true&query=${content}`
      );
};

const GET_POST_PENDING = "post/GET_POST_PENDING";
const GET_POST_SUCCESS = "post/GET_POST_SUCCESS";
const GET_POST_FAILURE = "post/GET_POST_FAILURE";

const getPostPending = createAction(GET_POST_PENDING);
const getPostSuccess = createAction(GET_POST_SUCCESS);
const getPostFailure = createAction(GET_POST_FAILURE);

export const getPost = content => dispatch => {
  dispatch(getPostPending());

  return getPostAPI(content)
    .then(response => {
      dispatch(getPostSuccess(response));
    })
    .catch(err => {
      dispatch(getPostFailure(err));
      throw err;
    });
};

const initialState = {
  pending: false,
  error: false,
  movies: []
};

export default handleActions({
  [GET_POST_PENDING]: (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    };
  },
  [GET_POST_SUCCESS]: (state, action) => {
    return {
      ...state,
      pending: false,
      movies: action.payload.data
    };
  },
  [GET_POST_FAILURE]: (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    };
  }
});
