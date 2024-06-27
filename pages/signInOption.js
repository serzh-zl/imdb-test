const BasePage = require('./basePage');

class SignInOption extends BasePage {
  constructor(page) {
    super(page);
    this.option = page.locator('//*[@id="signin-options"]/div');
    this.signInIMDB = page.locator('//*[@id="signin-options"]/div/div[1]/a[1]');
  }

  async isSignInOptionVisible() {
    await this.option.waitFor({ state: 'visible' });
    return await this.option.isVisible();
  }

  async sighInWithIMDB() {
    await this.signInIMDB.waitFor({ state: 'visible' });
    await this.signInIMDB.click();
  }
}

module.exports = SignInOption;