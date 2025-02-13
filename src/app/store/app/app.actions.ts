import {createAction, props} from '@ngrx/store';

enum ActionTypes {
    SET_IS_LOADING = '[App] Set Is Loading',
    SET_IS_LOADING_SUCCESS = '[App] Set Is Loading Success',
    SET_IS_LOADING_FAILURE = '[App] Set Is Loading Failure',

    SET_IS_SIDEBAR_OPEN = '[App] Set Is Sidebar Open',

    SET_IS_AUTHENTICATED_TO_TELEROUTE = '[App] Set Is Authenticated To Teleroute',
    SET_IS_AUTHENTICATED_TO_TELEROUTE_SUCCESS = '[App] Set Is Authenticated To Teleroute Success',
    SET_IS_AUTHENTICATED_TO_TELEROUTE_FAILURE = '[App] Set Is Authenticated To Teleroute Failure',

    FETCH_TELEROUTE_REFRESH_TOKEN = '[App] Fetch Teleroute Refresh Token',
    FETCH_TELEROUTE_REFRESH_TOKEN_SUCCESS = '[App] Fetch Teleroute Refresh Token Success',
    FETCH_TELEROUTE_REFRESH_TOKEN_FAILURE = '[App] Fetch Teleroute Refresh Token Failure',

}

export const setIsLoading = createAction(
    ActionTypes.SET_IS_LOADING,
    props<{ isLoading: boolean }>());
export const setIsLoadingSuccess = createAction(
    ActionTypes.SET_IS_LOADING_SUCCESS,
    props<{ isLoading: boolean }>());
export const setIsLoadingFailure = createAction(
    ActionTypes.SET_IS_LOADING_FAILURE,
    props<{ error: any }>());
export const setIsSidebarOpen = createAction(
    ActionTypes.SET_IS_SIDEBAR_OPEN,
    props<{ isSidebarOpen: boolean }>());
export const setIsAuthenticatedToTeleroute = createAction(
    ActionTypes.SET_IS_AUTHENTICATED_TO_TELEROUTE,
    props<{ isAuthenticatedToTeleroute: boolean }>());
export const setIsAuthenticatedToTelerouteSuccess = createAction(
    ActionTypes.SET_IS_AUTHENTICATED_TO_TELEROUTE_SUCCESS,
    props<{ isAuthenticatedToTeleroute: boolean }>());

export const setIsAuthenticatedToTelerouteFailure = createAction(
    ActionTypes.SET_IS_AUTHENTICATED_TO_TELEROUTE_FAILURE,
    props<{ error: any }>());

export const fetchTelerouteRefreshToken = createAction(
    ActionTypes.FETCH_TELEROUTE_REFRESH_TOKEN);
export const fetchTelerouteRefreshTokenSuccess = createAction(
    ActionTypes.FETCH_TELEROUTE_REFRESH_TOKEN_SUCCESS);
export const fetchTelerouteRefreshTokenFailure = createAction(
    ActionTypes.FETCH_TELEROUTE_REFRESH_TOKEN_FAILURE,
    props<{ error: any }>());
