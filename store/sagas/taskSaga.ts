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
  receiveReleasesAction,
  receiveReleaseDataAction,
} from "../action/action";
import {
  actionTypes,
  ObjectResult,
  REQUEST_RELEASE_DATA,
  REQUEST_RELEASES,
  REQUEST_ARTIST,
  REQUEST_SEARCH,
} from "../action/types";

interface searchTskProps {
  data: String;
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

function* searchTsk({ data }: searchTskProps): Generator<any, any, []> {
  console.log(`artist: ${data}`);
  try {
    const task = yield call(search, data);
    yield delay(400);
    yield put(receiveSearchAction(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getArtistTask({ id }: getArtistTaskProps): Generator<any, any, {}> {
  try {
    const task = yield call(getArtistData, id);
    yield put(receiveArtistAction(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getReleasesTask({
  id,
  typeOfArtist,
}: getReleaseTaskProps): Generator<any, any, []> {
  try {
    const task = yield call(getReleases, id, typeOfArtist);
    yield put(receiveReleasesAction(task));
  } catch (e) {
    console.log(`saga error: ${e}`);
  }
}

function* getReleaseDataTask({
  id,
}: getReleaseDataTaskProps): Generator<any, any, {}> {
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
  yield takeEvery(REQUEST_RELEASES, getReleasesTask);
  yield takeEvery(REQUEST_RELEASE_DATA, getReleaseDataTask);
}

export function* taskSaga() {
  yield all([watcherSaga()]);
}
