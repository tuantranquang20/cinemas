/* eslint-disable prettier/prettier */
import {put, takeEvery, call} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_HOME,
  GET_HOME_SUCCESS,
  GET_HOME_FAIL,
} from '../actions/type';

import * as API from '../../constants/Api';

export function* getUserInfor(payload) {
  try {
    const response = yield call(API.requestLogin, payload);
    yield put({type: GET_USER_SUCCESS, payload: response});
  } catch (err) {
    yield put({type: GET_USER_FAIL, payload: err});
  }
}
export function* getDataHome(payload) {
  try {
    const response = yield call(API.requestHomeData, payload);
    yield put({type: GET_HOME_SUCCESS, payload: response});
  } catch (err) {
    yield put({type: GET_HOME_FAIL, payload: err});
  }
}
export const watchGetUser = takeEvery(GET_USER, getUserInfor);
export const watchGetHome = takeEvery(GET_HOME, getDataHome);
