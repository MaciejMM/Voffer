import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {CookieService} from 'ngx-cookie-service';
import {TokenInterceptor} from './app/auth/token.interceptor';
import {providePrimeNG} from 'primeng/config';
import Material from '@primeng/themes/material';
import { provideStore } from '@ngrx/store';
import * as fromApp from './app/store/global.reducer';
import {provideEffects} from '@ngrx/effects';
import {OfferEffects} from './app/store/offer/offer.effects';

bootstrapApplication(AppComponent,

  {
    providers: [
    CookieService,
    provideRouter(routes),
      provideStore(fromApp.globalReducer),
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
    provideAnimationsAsync(),
      provideEffects([OfferEffects]),

      providePrimeNG({
        theme: {
            preset: Material,
            options: {
                darkModeSelector: 'none'
            }
        }
    }),
    provideHttpClient(withFetch(), withInterceptorsFromDi()), provideAnimationsAsync(),
    provideStore()
],
  }
)
  .catch((err) => console.error(err));
