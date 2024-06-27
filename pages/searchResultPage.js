const BasePage = require('./basePage');

class SearchResultPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchName = page.locator('//*[@id="__next"]/main/div[2]/div[3]/section/div/div[1]/section[1]/h1');
    this.moreResult = page.locator('//*[@id="__next"]/main/div[2]/div[3]/section/div/div[2]/div[2]/section[1]');
    this.advancedSearch = page.locator('//*[@id="__next"]/main/div[2]/div[3]/section/div/div[2]/div[2]/section[2]');
    this.people = page.locator('//*[@id="__next"]/main/div[2]/div[3]/section/div/div[1]/section[3]');
    this.titles = page.locator('//*[@id="__next"]/main/div[2]/div[3]/section/div/div[1]/section[2]');
  }
  async isSearchNameVisible() {
    await this.searchName.waitFor({ state: 'visible' });
    return await this.searchName.isVisible();
  }

  async isMoreResultVisible() {
    await this.moreResult.waitFor({ state: 'visible' });
    return await this.moreResult.isVisible();
  }

  async isAdvancedSearchVisible() {
    await this.advancedSearch.waitFor({ state: 'visible' });
    return await this.advancedSearch.isVisible();
  }

  async isPeopleVisible() {
    await this.people.waitFor({ state: 'visible' });
    return await this.people.isVisible();
  }

  async isTitlesTextVisible() {
    await this.titles.waitFor({ state: 'visible' });
    return await this.titles.isVisible();
  }

  async isSearchResultContainSearchText(searchText) {
    await this.searchName.waitFor({ state: 'visible' });
    const isTextMatch =  await this.searchName.textContent();
    return isTextMatch.includes(searchText)
  }
}

module.exports = SearchResultPage;
