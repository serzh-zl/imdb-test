const BasePage = require('./basePage');

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
    this.usernameInput = page.locator('#ap_email');
    this.passwordInput = page.locator('#ap_password');
    this.loginButton = page.locator('#signInSubmit');
    this.loginForm = page.locator('//*[@id="authportal-main-section"]/div[2]/div[2]/div/form/div/div')
}

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async isLoginFormVisible() {
    await this.loginForm.waitFor({ state: 'visible' });
    return await this.loginForm.isVisible();
  }
}

module.exports = LoginPage;
