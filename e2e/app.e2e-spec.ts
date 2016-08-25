import { CpPage } from './app.po';

describe('cp App', function() {
  let page: CpPage;

  beforeEach(() => {
    page = new CpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
