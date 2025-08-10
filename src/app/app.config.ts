import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
// Usamos withHashLocation para que las rutas funcionen correctamente con el hash en la URL
import { provideRouter, withHashLocation } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
// Importamos el http client para realizar peticiones HTTP de manera moderna y eficiente angular 20

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    // Proporcionamos las rutas de la aplicación con el hash en la URL
    provideRouter(routes, withHashLocation()),
    provideHttpClient() // Proporcionamos el HttpClient para realizar peticiones HTTP
  ]
};
