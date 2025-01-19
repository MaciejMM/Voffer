import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

import {provideClientHydration} from '@angular/platform-browser';
import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withFetch} from '@angular/common/http';
import {TokenInterceptor} from './auth/token.interceptor';
import {providePrimeNG} from 'primeng/config';
import Material from '@primeng/themes/material';

export const appConfig: ApplicationConfig = {
  providers: [
    CookieService,
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    providePrimeNG({
      theme: {
        preset: Material,
        options: {
          darkModeSelector: 'none'
        }
      }
    }),
    provideHttpClient(withFetch()),
    provideClientHydration()]
};
