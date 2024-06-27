const BasePage = require('./basePage');

class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.signInText = page.locator('//*[@id="imdbHeader"]/div[2]/div[5]/div/label[2]/span');
    this.searchInput = page.locator('#suggestion-search');
    this.searchIcon = page.locator('#suggestion-search-button');
}

  async getSignInText() {
    await this.signInText.waitFor({ state: 'visible' });
    return await this.signInText.textContent();
  }

  async getSearchInput() {
    await this.searchInput.waitFor({ state: 'visible' });
    return await this.searchInput.textContent();
  }

  async search(searchText) {
    await this.searchInput.fill(searchText);
    await this.searchIcon.click();
  }
}

module.exports = SearchPage;
