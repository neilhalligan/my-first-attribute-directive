import { MyFirstAttributeDirectivePage } from './app.po';

describe('my-first-attribute-directive App', () => {
  let page: MyFirstAttributeDirectivePage;

  beforeEach(() => {
    page = new MyFirstAttributeDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
