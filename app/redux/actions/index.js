/* eslint-disable prettier/prettier */
import {GET_USER, GET_HOME, GET_HOME_FAIL, GET_HOME_SUCCESS} from './type';

export const getUserInfoAction = () => ({
  type: GET_USER,
  payload: {},
});
export const getHomeRequest = () => ({
  type: GET_HOME,
  payload: {},
});
export const getHomeRequestSuccess = () => ({
  type: GET_HOME_SUCCESS,
  payload: {},
});
export const getHomeRequestFail = () => ({
  type: GET_HOME_FAIL,
  payload: {},
});
