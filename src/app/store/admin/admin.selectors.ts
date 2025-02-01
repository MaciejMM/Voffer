import { createFeatureSelector, createSelector } from "@ngrx/store";
import {State} from './admin.reducer';


export const selectAdminState = createFeatureSelector<State>('admin');
export const selectUserList = createSelector(selectAdminState, (state: State) => state.userList);
export const selectEditedUserId = createSelector(selectAdminState, (state: State) => state.editedUserId);
export const selectDisplayError = createSelector(selectAdminState, (state: State) => state.displayError);
export const selectDisplaySuccess = createSelector(selectAdminState, (state: State) => state.displaySuccess);

