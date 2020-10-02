/* eslint-disable prettier/prettier */
import {watchGetUser, watchGetHome} from './NetworkSaga';

export default function* rootSaga() {
  yield watchGetUser;
  yield watchGetHome;
}
