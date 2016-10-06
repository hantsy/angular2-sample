import { Ng2HelloPage } from './app.po';

describe('ng2-hello App', function() {
  let page: Ng2HelloPage;

  beforeEach(() => {
    page = new Ng2HelloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
