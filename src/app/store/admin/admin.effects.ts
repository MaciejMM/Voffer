import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {UserService} from "../../features/admin/services/user-service";
import * as AdminState from "./admin.reducer";
import {Store} from "@ngrx/store";
import {map, switchMap} from "rxjs";
import * as adminActions from "./admin.actions";
import {catchError, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";
import {User} from "../../features/admin/models/User";
import {selectEditedUserId} from './admin.selectors';

@Injectable()
export class AdminEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private readonly store: Store<AdminState.State>
  ) {
  }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminActions.fetchUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((res: User[]) => {
            return adminActions.fetchUsersSuccess({users: res});
          }),
          catchError((error: any) => {
            return of(adminActions.fetchUsersFailure({error}));
          })
        )
      )
    )
  );


  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminActions.createUser),
      switchMap((action) =>
        this.userService.createUser(action.user).pipe(
          map((res: User) => {
            return adminActions.createUserSuccess({user: res});
          }),
          catchError((error: any) => {
            return of(adminActions.createUserFailure({error}));
          })
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminActions.updateUser),
      withLatestFrom(this.store.select(selectEditedUserId)),
      switchMap(([action, userId]) =>
        this.userService.updateUser(action.user, userId).pipe(
          map((res: User) => {
            return adminActions.updateUserSuccess({user: res});
          }),
          catchError((error: any) => {
            return of(adminActions.updateUserFailure({error}));
          })
        )
      )
    ));


  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(adminActions.deleteUser),
      switchMap((action) =>
        this.userService.deleteUser(action.id).pipe(
          map(() => {
            return adminActions.deleteUserSuccess({id: action.id});
          }),
          catchError((error: any) => {
            return of(adminActions.deleteUserFailure({error}));
          })
        )
      )
    )
  );
}
