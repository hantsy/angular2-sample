import { Component, OnInit } from '@angular/core';

class Skill {
  name: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  skills: Skill[];

  constructor() { }

  ngOnInit() {
    this.skills = [
      {
        name: 'Angular 2',
        description: 'Web component based MVVM framework.',
        url: 'http://angular.io'
      },
      {
        name: 'Typescript',
        description: 'Typescript is a typed superset of JavaScript that compiles to plain JavaScript.',
        url: 'https://www.typescriptlang.org/'
      },
      {
        name: 'RxJS',
        description: 'Reactive programming for JavaScript',
        url: 'http://reactivex.io/rxjs/'
      },
      {
        name: 'Angular CLI',
        description: 'Official command line tooling for Angular 2',
        url: 'https://github.com/angular/angular-cli'
      },
      {
        name: 'Webpack',
        description: 'The only build pack you should have.',
        url: 'https://webpack.github.io/'
      },
      {
        name: 'Bootstrap',
        description: 'The most popular frontend CSS framework.',
        url: 'https://getbootstrap.org/'
      },
    ];
  }

}
