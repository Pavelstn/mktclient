import { MktclientPage } from './app.po';

describe('mktclient App', () => {
  let page: MktclientPage;

  beforeEach(() => {
    page = new MktclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
