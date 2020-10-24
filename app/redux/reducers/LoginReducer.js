/* eslint-disable prettier/prettier */
import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS} from '../actions/type';

const initialState = {
  data: {},
  isLoading: true,
  error: null,
  token : null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {...state, isLoading: true};
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload.data?.user,
        token : action.payload?.token
      };
    }
    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
