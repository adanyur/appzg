// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://3.239.36.177:8080/appMedicalApiRestFull',
  url_descarga: 'http://localhost:8080/paper.pdf',
  url_subida: 'http://localhost:8080/subir?id=paper.pdf',
  firma_x: '315',
  firma_y: '120',
  firma_largo: '232',
  firma_alto: '50',
  firma_texto:
    'Firmado+por%3A+%3CSIGNER%3E%0D%0A%3CORGANIZATION%3E%0D%0AFecha%3A+%3CDATE%3E%0D%0APor+www.watana.pe',
  firma_pagina: '1',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
