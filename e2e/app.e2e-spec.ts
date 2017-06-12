import { OnlineStorePage } from './app.po';

describe('online-store App', () => {
  let page: OnlineStorePage;

  beforeEach(() => {
    page = new OnlineStorePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
