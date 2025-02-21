import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as AppState from './app.reducer';
import {TelerouteAuthService} from '../../shared/services/teleroute/teleroute-auth.service';
import {catchError, map, mergeMap, of, switchMap} from 'rxjs';
import * as appActions from './app.actions';
import {TranseuTokenService} from '../../shared/services/transeu/transeu-token.service';

@Injectable()
export class AppEffects {

  constructor(
    readonly actions$: Actions,
    readonly store: Store<AppState.State>,
    readonly telerouteAuthService: TelerouteAuthService,
    readonly transeuTokenService: TranseuTokenService
  ) {
  }

  fetchTranseuToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.fetchTranseuToken),
      mergeMap((action) =>
        this.transeuTokenService.login(action.code).pipe(
          map(() => {
            return appActions.fetchTranseuTokenSuccess();
          }),
          catchError((error: any) => {
            return of(appActions.fetchTranseuTokenFailure({error}));
          })
        )
      )
    )
  );


  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.fetchTelerouteRefreshToken),
      switchMap(() =>
        this.telerouteAuthService.refreshToken().pipe(
          map(() => {
            return appActions.fetchTelerouteRefreshTokenSuccess();
          }),
          catchError((error: any) => {
            return of(appActions.fetchTelerouteRefreshTokenFailure({error}));
          })
        )
      )
    )
  );

}
