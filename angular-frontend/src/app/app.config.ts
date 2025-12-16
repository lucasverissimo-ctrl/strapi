import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ApiService } from './services/api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideHttpClient(/* opcional: withInterceptorsFromDi() */),

    provideAppInitializer(() => {
      if (typeof window === 'undefined') return;
      const api = inject(ApiService);
      return api.initCall().catch((err: any) => {
        console.error('initCall falhou', err);
        // garantir que não bloqueie indefinidamente: resolve mesmo em erro
        return Promise.resolve();
      });
    }),
  ],
};
