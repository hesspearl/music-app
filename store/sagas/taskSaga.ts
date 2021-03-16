import {
  takeEvery,
  call,
  all,
  put,
  takeLatest,
  delay,
} from "redux-saga/effects";
import {
  getArtistData,
  getReleases,
  getReleaseData,
  search,
} from "../../service/api";
import { getArtist, searchArtist } from "../action/action";
import {
  actionTypes,
  GET_ARTIST,
  RELEASE,
  RELEASE_DATA,
  SEARCH,
} from "../action/types";

interface searchTskProps {
  artist: String;
}

interface getArtistTaskProps {
  id: Number;
}

interface getReleaseTaskProps {
  id: Number;
  type: String;
}

interface getReleaseDataTaskProps {
  id: Number;
}

function* searchTsk({ artist }: searchTskProps): Generator<any> {
  console.log(`artist: ${artist}`);
  try {
    const task = yield call(search, artist);
    yield delay(400);
    yield put(searchArtist(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getArtistTask({ id }: getArtistTaskProps): Generator<any> {
  try {
    const task = yield call(getArtistData, id);
    yield put(getArtist(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}
function* getReleaseTask({ id, type }: getReleaseTaskProps): Generator<any> {
  try {
    const task = yield call(getReleases, { id, type });
    yield put(task);
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getReleaseDataTask({ id }: getReleaseDataTaskProps): Generator<any> {
  try {
    const task = yield call(getReleaseData, id);
    yield put(task);
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

//this function will watch any call the dispatch actions receive
//and map to handler
function* watcherSaga() {
  yield takeLatest(SEARCH, searchTsk);
  yield takeEvery(GET_ARTIST, getArtistTask);
  yield takeEvery(RELEASE, getReleaseTask);
  yield takeEvery(RELEASE_DATA, getReleaseDataTask);
}

export function* taskSaga() {
  yield all([watcherSaga()]);
}
