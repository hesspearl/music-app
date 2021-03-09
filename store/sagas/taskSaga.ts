import { takeEvery, call, all, put, takeLatest } from "redux-saga/effects";
import { search } from "../../service/api";
import { searchArtist } from "../action/action";
import { actionTypes, SEARCH } from "../action/types";

function* searchTsk({ artist }: actionTypes): Generator<any> {
  console.log(`artist: ${artist}`);
  try {
    const task = yield call(search, artist);
    // yield put(searchArtist(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

//this function will watch any call the dispatch actions receive
//and map to handler
function* watcherSaga() {
  yield takeLatest(SEARCH, searchTsk);
}

export function* taskSaga() {
  yield all([watcherSaga()]);
}
