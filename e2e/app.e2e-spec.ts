import { AngularWeatherTestPage } from './app.po';

describe('angular-weather-test App', () => {
  let page: AngularWeatherTestPage;

  beforeEach(() => {
    page = new AngularWeatherTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
