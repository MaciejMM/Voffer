import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import * as AppState from './app.reducer';
import {TelerouteAuthService} from '../../shared/services/teleroute/teleroute-auth.service';
import {catchError, map, of, switchMap} from 'rxjs';
import * as appActions from './app.actions';

@Injectable()
export class AppEffects{

  constructor(
    readonly actions$: Actions,
    readonly store: Store<AppState.State>,
    readonly telerouteAuthService: TelerouteAuthService
  ){}


  refreshToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.fetchTelerouteRefreshToken),
      switchMap(() =>
        this.telerouteAuthService.refreshToken().pipe(
          map((res: any) => {
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
