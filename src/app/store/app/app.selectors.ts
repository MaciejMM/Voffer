import {createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from './app.reducer';


export const selectAppState = createFeatureSelector<State>('app');
export const selectIsTelerouteAuthenticated = createSelector(selectAppState, (state: State) => state.isTelerouteAuthenticated);
export const selectIsLoading = createSelector(selectAppState, (state: State) => state.isLoading);
export const selectIsAuthenticatedToTeleroute = createSelector(selectAppState, (state: State) => state.isTelerouteAuthenticated);
export const selectIsLoadingToTeleroute = createSelector(selectAppState, (state: State) => state.isLoading);

