import { createReducer, on } from "@ngrx/store";
import { User } from "../../features/admin/models/User";
import * as AdminActions from "./admin.actions";

export type State= {
    userList: User[];
    editedUserId: number;
    displayError: boolean;
    displaySuccess: boolean;
    error: any;
}

export const initialState:State = {
    userList: [],
    editedUserId: 0,
    displayError: false,
    displaySuccess: false,
    error: null
}


export const adminReducer = createReducer(
    initialState,
    on(AdminActions.fetchUsers, (state) => ({
        ...state,
        isLoading: true
    })),
    on(AdminActions.fetchUsersSuccess, (state, payload) => ({
        ...state,
        isLoading: false,
        userList: payload.users
    })),
    on(AdminActions.fetchUsersFailure, (state, payload) => ({
        ...state,
        isLoading: false,
        displayError: true,
        error: payload.error
    })),
    on(AdminActions.createUser, (state) => ({
        ...state,
        isLoading: true
    })),
    on(AdminActions.createUserSuccess, (state, payload) => ({
        ...state,
        isLoading: false,
        userList: [...state.userList, payload.user],
        displaySuccess: true
    })),
    on(AdminActions.createUserFailure, (state, payload) => ({
        ...state,
        isLoading: false,
        displayError: true,
        error: payload.error
    })),
    on(AdminActions.updateUser, (state) => ({
        ...state,
        isLoading: true
    })),
    on(AdminActions.updateUserSuccess, (state, payload) => ({
        ...state,
        isLoading: false,
        userList: state.userList.map((user:User) => user.id === payload.user.id ? payload.user : user),
        displaySuccess: true
    })),
    on(AdminActions.updateUserFailure, (state, payload) => ({
        ...state,
        isLoading: false,
        displayError: true,
        error: payload.error
    })),
    on(AdminActions.deleteUser, (state) => ({
        ...state,
        isLoading: true
    })),
    on(AdminActions.deleteUserSuccess, (state, payload) => ({
        ...state,
        isLoading: false,
        userList: state.userList.filter((user:User) => user.id !== payload.id),
        displaySuccess: true
    })),
    on(AdminActions.deleteUserFailure, (state, payload) => ({
        ...state,
        isLoading: false,
        displayError: true,
        error: payload.error
    })),
    on(AdminActions.setEditedUserId, (state, payload) => ({
        ...state,
        editedUserId: payload.id
    }),
)   

)

