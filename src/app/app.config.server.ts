import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { routes } from './app.routes'; // <- make sure it's the same routes

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), // SSR enabled
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
