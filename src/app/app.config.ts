import { OpaqueToken } from '@angular/core';

export interface AppConfig {
  jwtKey?: string;
  apiEndpoint?: string;
}

export const DEFAULT_APP_CONFIG: AppConfig = {
  jwtKey: 'id_token',
  apiEndpoint: 'http://localhost:8080/blog-api-cdi/api'
};

export let APP_CONFIG = new OpaqueToken('app.config');
