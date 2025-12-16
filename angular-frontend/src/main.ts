import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    const loader = document.getElementById('app-loading');
    if (loader) loader.remove();
  })
  .catch((err) => console.error(err));
