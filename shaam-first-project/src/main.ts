import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  // AppModule    - EXE

  // Angular Module - DLL
  // * Components - User control - new Html Tag
      // Basic shared components - my-date-picker - reuse
      // project component -       worker-list - reuse
      // page component - full page component

      // foreach component :
          // HTML - content
          // CSS - style
          // TS - typescript - logic

  // * Directives - new Html attribute
      // <input type="text" only-hebrew/>

  // * Pipes


  




























