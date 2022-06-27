import {createReducer, on } from "@ngrx/store";
import {login} from "./app.actions";

export interface State {
  home: number;
  away: number;
}

export const initialState: State = {
  home: 0,
  away: 0,
};
export const storeReducer = createReducer(
  initialState,
  on(login, state => ({ ...state, home: state.home + 1 })),

);
