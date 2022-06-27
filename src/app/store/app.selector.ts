import {AppState} from "./store.reducer";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: any) => state.app;
export const selectFeature2 = createSelector(selectFeature,(state:AppState): number=>{
  return state.home;
});
export const shoppingBagItems$ = createSelector(selectFeature,(state:AppState): any[]=>{
  return state.shoppingBagItem;
});
