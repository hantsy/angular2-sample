export class Angular2SamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-sample-app h1')).getText();
  }
}
