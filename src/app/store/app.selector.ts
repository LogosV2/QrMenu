import {AppState} from "./store.reducer";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: any) => state.app;

export const shoppingBagItems$ = createSelector(selectFeature,(state:AppState): any[]=>{
  return state.shoppingBagItem;
});
