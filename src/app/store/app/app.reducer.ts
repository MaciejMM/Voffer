import {createReducer, on} from '@ngrx/store';
import * as appActions from './app.actions';
export type  State ={
  isTelerouteAuthenticated: boolean;
  isLoading: boolean;
  transeuCode?: string;
}

export const initialState:State = {
  isTelerouteAuthenticated: false,
  isLoading: false,
  transeuCode: undefined
}

export const appReducer = createReducer(
  initialState,
  on(appActions.setIsAuthenticatedToTeleroute, (state) => ({
    ...state,
    isLoading: true
  })),
  on(appActions.setIsAuthenticatedToTelerouteSuccess, (state) => ({
    ...state,
    isLoading: false,
    isTelerouteAuthenticated: true
  })),
  on(appActions.setIsAuthenticatedToTelerouteFailure, (state) => ({
    ...state,
    isLoading: false,
    isTelerouteAuthenticated: false
  })),
  on(appActions.setIsLoading, (state) => ({
    ...state,
    isLoading: true
  })),
  on(appActions.setIsLoadingSuccess, (state) => ({
    ...state,
    isLoading: false
  })),
  on(appActions.setIsLoadingFailure, (state) => ({
    ...state,
    isLoading: false
  })),
  on(appActions.fetchTelerouteRefreshToken, (state) => ({
    ...state,
    isLoading: true
  })),
  on(appActions.fetchTelerouteRefreshTokenSuccess, (state) => ({
    ...state,
    isLoading: false,
    isTelerouteAuthenticated: true
  })),
  on(appActions.fetchTelerouteRefreshTokenFailure, (state) => ({
    ...state,
    isLoading: false,
    isTelerouteAuthenticated: false
  })),
  on(appActions.setTranseuCode, (state, payload) => ({
    ...state,
    transeuCode: payload.code
  })),
  on(appActions.resetTranseuCode, (state) => ({
    ...state,
    transeuCode: undefined
  }))
);
