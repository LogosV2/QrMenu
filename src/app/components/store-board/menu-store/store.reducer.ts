import {createReducer, on} from "@ngrx/store";
import {login} from "./app.actions";

export interface State {
  storeReducer: any;
}

export const initialState: State = {
  storeReducer: {home:0, away:0},


};
export const storeReducer = createReducer(
  initialState,
  on(login, state => ({ ...state, storeReducer: state.storeReducer.home + 1 })),

);
