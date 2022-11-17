// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  url_api: 'http://localhost:3000/productos',
  firebase: {
    apiKey: "AIzaSyB3oVqT4riwD-jC7duplj_XXUhrt2C6TZI",
    authDomain: "peachbody-shop.firebaseapp.com",
    projectId: "peachbody-shop",
    storageBucket: "peachbody-shop.appspot.com",
    messagingSenderId: "175921380400",
    appId: "1:175921380400:web:5521916892a1529e6601f5"
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
