import { NgcartPage } from './app.po';

describe('ngcart App', () => {
  let page: NgcartPage;

  beforeEach(() => {
    page = new NgcartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
