import { HomeblindsPage } from './app.po';

describe('homeblinds App', () => {
  let page: HomeblindsPage;

  beforeEach(() => {
    page = new HomeblindsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
