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

bootstrapApplication(AppComponent,

  {
    providers: [
      CookieService,
      provideRouter(routes),
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      },
      provideAnimationsAsync(),
      providePrimeNG({
        theme: {
          preset: Material,
          options: {
            darkModeSelector: 'none'
          }
        }
      }),
      provideHttpClient(withFetch(), withInterceptorsFromDi()), provideAnimationsAsync(),

    ],
  }
)
  .catch((err) => console.error(err));
