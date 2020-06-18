// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  URL_API: 'https://platzi-store-stag.herokuapp.com/products/',
  firebaseConfig: {
    apiKey: "AIzaSyAlCAEgIHQJ-HyGzbn91D9ay9eOdCOvfo8",
    authDomain: "platzi-store-c81ea.firebaseapp.com",
    databaseURL: "https://platzi-store-c81ea.firebaseio.com",
    projectId: "platzi-store-c81ea",
    storageBucket: "platzi-store-c81ea.appspot.com",
    messagingSenderId: "1083550746608",
    appId: "1:1083550746608:web:5fa38a1776938fe1107f35"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
