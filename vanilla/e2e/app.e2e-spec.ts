import { Angular2SamplePage } from './app.po';

describe('angular2-sample App', function() {
  let page: Angular2SamplePage;

  beforeEach(() => {
    page = new Angular2SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
