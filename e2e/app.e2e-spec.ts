import { PorterStemmingTDDPage } from './app.po';

describe('porter-stemming-tdd App', function() {
  let page: PorterStemmingTDDPage;

  beforeEach(() => {
    page = new PorterStemmingTDDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
