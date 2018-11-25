import { createAction, handleActions } from "redux-actions";
import axios from "axios";

function getPostAPI(content) {
  const key = `b6cf942411531af0d1635061b75f82a6`
  const urlString =
    content === ""
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=ko-Kr&page=1&include_adult=true`
      : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=ko-Kr&page=1&include_adult=true&query=${content}`;

  return axios.get(urlString);
}

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

      return response;
    })
    .catch(error => {
      dispatch(getPostFailure(error));
      throw error;
    });
};

const initialState = {
  pending: false,
  error: false,
  movies: []
};

export default handleActions(
  {
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
        movies: action.payload.data.results
      };
    },
    [GET_POST_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true
      };
    }
  },
  initialState
);
