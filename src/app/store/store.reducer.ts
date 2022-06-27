import {createReducer, on} from "@ngrx/store";
import {addToBasket, login} from "./app.actions";


export interface AppState {
  home: number,
  away: number,
  shoppingBagItem: any[],
}

export const initialState: AppState = {
  home: 0, away: 0,shoppingBagItem: [],

};

export const app = createReducer(
  initialState,
  on(login, (state, {password, username}) => {
      return {...state, home: state.home + 1}
    }

  ),
  on(addToBasket,(state,{item})=>{
    return {...state, shoppingBagItem: [...state.shoppingBagItem, item]}

  })
  )
