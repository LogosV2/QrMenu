import {State} from "./store.reducer";
import {createSelector} from "@ngrx/store";

export const selectFeature = (state: State) => state;
export const selectFeature2 = createSelector(selectFeature,(state)=>{
  return state.home
});
