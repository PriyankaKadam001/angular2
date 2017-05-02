import { Ang2LognPage } from './app.po';

describe('ang2-logn App', () => {
  let page: Ang2LognPage;

  beforeEach(() => {
    page = new Ang2LognPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
