import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ username: string; password: string }>()
);
export const addToBasket = createAction(
  '[Store Page] Add to basket',
  props<{ item:any }>()
);
export const removeFromBasket = createAction(
  '[Store Page] Remove from basket',
  props<{ index:number }>()
);
