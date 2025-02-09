import { createAction, props } from "@ngrx/store";
import { User } from "../../features/admin/models/User";
import {UpdateUser, UserRequest} from "../../features/admin/models/UserRequest";
import {ErrorResponse} from '../../shared/model/ErrorResponse';

enum ActionTypes {
    FETCH_USERS = '[Admin] Fetch Users',
    FETCH_USERS_SUCCESS = '[Admin] Fetch Users Success',
    FETCH_USERS_FAILURE = '[Admin] Fetch Users Failure',

    CREATE_USER = '[Admin] Create User',
    CREATE_USER_SUCCESS = '[Admin] Create User Success',
    CREATE_USER_FAILURE = '[Admin] Create User Failure',

    UPDATE_USER = '[Admin] Update User',
    UPDATE_USER_SUCCESS = '[Admin] Update User Success',
    UPDATE_USER_FAILURE = '[Admin] Update User Failure',

    DELETE_USER = '[Admin] Delete User',
    DELETE_USER_SUCCESS = '[Admin] Delete User Success',
    DELETE_USER_FAILURE = '[Admin] Delete User Failure',

    SET_EDITED_USER_ID = '[Admin] Set Edited User Id',
    CLEAR_EDITED_USER_ID = '[Admin] Clear Edited User Id',

    SET_IS_LOADING = '[Admin] Set Is Loading',

}

export const fetchUsers = createAction(ActionTypes.FETCH_USERS);
export const fetchUsersSuccess = createAction(
    ActionTypes.FETCH_USERS_SUCCESS,
    props<{ users: User[] }>());
export const fetchUsersFailure = createAction(
    ActionTypes.FETCH_USERS_FAILURE,
    (error: any) => ({ error }));

export const createUser = createAction(
    ActionTypes.CREATE_USER,
    props<{ user: UserRequest }>());

export const createUserSuccess = createAction(
    ActionTypes.CREATE_USER_SUCCESS,
    props<{ user: User }>());
export const createUserFailure = createAction(
    ActionTypes.CREATE_USER_FAILURE,
    props<{ error: ErrorResponse }>());

export const updateUser = createAction(
    ActionTypes.UPDATE_USER,
    props<{ user: UpdateUser }>());
export const updateUserSuccess = createAction(
    ActionTypes.UPDATE_USER_SUCCESS,
    props<{ user: User }>());
export const updateUserFailure = createAction(
    ActionTypes.UPDATE_USER_FAILURE,
    props<{ error: any }>());

export const deleteUser = createAction(
    ActionTypes.DELETE_USER,
    props<{ id: number }>());
export const deleteUserSuccess = createAction(
    ActionTypes.DELETE_USER_SUCCESS,
    props<{ id: number }>());
export const deleteUserFailure = createAction(
    ActionTypes.DELETE_USER_FAILURE,
    props<{ error: any }>());

export const setEditedUserId = createAction(
    ActionTypes.SET_EDITED_USER_ID,
    props<{ id: number }>());

export const clearEditedUserId = createAction(
    ActionTypes.CLEAR_EDITED_USER_ID);

export const setIsLoading = createAction(
    ActionTypes.SET_IS_LOADING,
    props<{ isLoading: boolean }>());
