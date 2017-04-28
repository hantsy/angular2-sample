import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private translate: TranslateService, private authService: AuthService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|zh/) ? browserLang : 'en');

    this.translate.use('en');

    console.log('posts of lang:' + this.translate.instant('posts'));
    console.log('posts nonexist of lang:' + this.translate.instant('posts-nonexist'));
  }

  ngOnInit() {
    this.authService.verifyAuth();
  }
}
