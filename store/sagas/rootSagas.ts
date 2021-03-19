import { all, fork } from "redux-saga/effects";
import { taskSaga } from "./taskSaga";

export function* rootSagas() {
  yield all([taskSaga()]);
}
