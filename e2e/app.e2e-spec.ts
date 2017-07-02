import { YalukAdvanceSearchPage } from './app.po';

describe('yaluk-advance-search App', () => {
  let page: YalukAdvanceSearchPage;

  beforeEach(() => {
    page = new YalukAdvanceSearchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
