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
import {
 receiveSearchAction,
 receiveArtistAction,
 receiveReleaseAction,
 receiveReleaseDataAction,
} from "../action/action";
import {
  actionTypes,
  ObjectResult,
  REQUEST_RELEASE_DATA,
  REQUEST_RELEASE,
  REQUEST_ARTIST,
  REQUEST_SEARCH,
} from "../action/types";

interface searchTskProps {
  artist: string;
  type: string;
}

interface getArtistTaskProps {
  id: Number;
  type: string;
}

interface getReleaseTaskProps {
  id: Number;
  type: string;
  typeOfArtist: string;
}

interface getReleaseDataTaskProps {
  id: Number;
  type: string;
}

function* searchTsk({
  artist,
}: searchTskProps): Generator<any, any, ObjectResult> {
  // console.log(`artist: ${artist}`);
  try {
    const task = yield call(search, artist);
    yield delay(400);
     // yield put(receiveSearchAction(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getArtistTask({
  id,
}: getArtistTaskProps): Generator<any, any, ObjectResult> {
  try {
    const task = yield call(getArtistData, id);
    yield put(receiveArtistAction(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getReleaseTask({
  id,
  typeOfArtist,
}: getReleaseTaskProps): Generator<any, any, ObjectResult> {
  try {
    const task = yield call(getReleases, id, typeOfArtist);
    yield put(receiveReleaseAction(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getReleaseDataTask({
  id,
}: getReleaseDataTaskProps): Generator<any, any, ObjectResult> {
  try {
    const task = yield call(getReleaseData, id);
    yield put(receiveReleaseDataAction(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

//this function will watch any call the dispatch actions receive
//and map to handler
function* watcherSaga() {
  yield takeLatest(REQUEST_SEARCH, searchTsk);
  yield takeEvery(REQUEST_ARTIST, getArtistTask);
  yield takeEvery(REQUEST_RELEASE, getReleaseTask);
  yield takeEvery(REQUEST_RELEASE_DATA, getReleaseDataTask);
}

export function* taskSaga() {
  yield all([watcherSaga()]);
}
