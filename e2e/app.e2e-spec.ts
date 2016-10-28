import { CostLoggerPage } from './app.po';

describe('cost-logger App', function() {
  let page: CostLoggerPage;

  beforeEach(() => {
    page = new CostLoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
