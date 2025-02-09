import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {CookieService} from 'ngx-cookie-service';
import {TokenInterceptor} from './app/auth/token.interceptor';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {OfferEffects} from './app/store/offer/offer.effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import * as fromApp from './app/store/global.reducer';
import { bootstrapApplication } from '@angular/platform-browser';
import { AdminEffects } from './app/store/admin/admin.effects';
import {provideKinde} from 'kinde-angular';
import {environment} from './environments/environment';

bootstrapApplication(AppComponent,

  {
    providers: [
      provideRouter(routes),
      provideStore(fromApp.globalReducer),
      provideStoreDevtools({
        maxAge: 25,
        connectInZone: true
      }),
      provideEffects([OfferEffects,AdminEffects]),
      CookieService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      },
      provideKinde({
        clientId: environment.kindeClientId,
        authDomain: environment.kindeDomain,
        redirectURL: environment.kindeRredirectURL,
        logoutRedirectURL: environment.kindeLogoutRedirectURL,
      }),
      provideAnimationsAsync(),
      provideHttpClient(withFetch(), withInterceptorsFromDi()), provideAnimationsAsync(),
    ],
  }
)
  .catch((err) => console.error(err));
