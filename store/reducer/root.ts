import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import { rootSagas } from "../sagas/rootSagas";

const Reducers = combineReducers({
  release: reducer,
});

export type RootState = ReturnType<typeof Reducers>;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSagas);
