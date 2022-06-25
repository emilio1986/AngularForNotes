import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Modulo de la app en general que se levanta por aca
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
