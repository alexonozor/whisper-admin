import { WishperAdminPage } from './app.po';

describe('wishper-admin App', () => {
  let page: WishperAdminPage;

  beforeEach(() => {
    page = new WishperAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
