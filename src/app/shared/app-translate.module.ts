import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader,
  MissingTranslationHandler,
  MissingTranslationHandlerParams
} from 'ng2-translate';


export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

export class MyMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return '[' + params.key + ']';
  }
}


// import en from './en.json';
// import zh from './zh.json';

// const translations = { 'en': en, 'zh': zh };

// class CustomLoader implements TranslateLoader {
//   getTranslation(lang: string): Observable<any> {
//     return Observable.of(translations[lang]);
//   }
// }
//TranslateModule.forRoot({ provide: TranslateLoader, useClass: CustomLoader })

@NgModule({
  imports: [
    HttpModule,
    TranslateModule.forRoot(
      {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    )
  ],
  exports: [TranslateModule],
  providers: [
    { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler }
  ],
})
export class AppTranslateModule { }
