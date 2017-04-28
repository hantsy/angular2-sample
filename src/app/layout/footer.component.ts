import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
  }

  isLanguage(lang: string): boolean {
    return this.translate.currentLang === lang;
  }

}
