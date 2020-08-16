import { useReducer, useEffect } from 'react';
import axios from 'axios';

const BASE_URL =
  'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
    ERROR: 'error',
  UPDATE_HAS_NEXT_PAGE: 'update-has-next-page'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
      case ACTIONS.UPDATE_HAS_NEXT_PAGE:
          return {...state, hasNextPage: action.payload.hasNextPage}
    default:
      return state;
  }
}

const useFetchJobs = (params, page) => {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    const fetchData = async () => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      try {
        const res = await axios.get(BASE_URL, {
          cancelToken: cancelToken.token,
          params: { markdown: true, page: page, ...params },
        });
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      } catch (err) {
        if (axios.isCancel(err)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: err } });
      }
    };

    fetchData();
    return () => {
      cancelToken.cancel();
    };
  }, [params, page]);

  return state;
};

export default useFetchJobs;
