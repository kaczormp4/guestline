import { combineReducers, createStore } from "redux";
import filterReducer from "./reducers/filterReducer";

const rootReducer = combineReducers(
    {
        filterReducer: filterReducer,
    }
);

const store = createStore(rootReducer);

export default store;