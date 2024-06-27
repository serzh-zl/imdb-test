const BasePage = require('./basePage');

class SignInPage extends BasePage {
  constructor(page) {
    super(page);
    this.signInButton = page.locator('//*[@id="imdbHeader"]/div[2]/div[5]');
  }

  async signIn() {
    await this.signInButton.click();
  }
}

module.exports = SignInPage;