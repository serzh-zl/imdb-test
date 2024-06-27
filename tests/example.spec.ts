import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import SignInPage from '../pages/signInPage';
import SignInOption from '../pages/signInOption';
import LoginPage from '../pages/loginPage';
import GeneralPage from '../pages/generalPage';
import SearchResultPage from '../pages/searchResultPage';

test.describe('Login Tests', () => {
  let browser;
  let page;
  let signInPage;
  let signInOption;
  let loginPage;
  let generalPage;
  let searchResultPage;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    signInPage = new SignInPage(page);
    signInOption = new SignInOption(page);
    loginPage = new LoginPage(page);
    generalPage = new GeneralPage(page);
    searchResultPage = new SearchResultPage(page)
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('sign in', async () => {
    await signInPage.navigateTo('https://www.imdb.com/');
    await signInPage.signIn();
    const isVisibleSignInOption = await signInOption.isSignInOptionVisible();
    expect(isVisibleSignInOption).toBe(true);
    await signInOption.sighInWithIMDB();
    const isVisibleLoginForm = await loginPage.isLoginFormVisible();
    expect(isVisibleLoginForm).toBe(true);
    await loginPage.login('serjarturich@mail.ru', 'serzh123456789')
    const signInText = await generalPage.getSignInText()
    expect(signInText).toBe('serzh');
    const isVisibleSearchInput = await generalPage.isSearchTextVisible()
    expect(isVisibleSearchInput).toBe(true);
    await generalPage.search('spider-man')



    const isVisibleSearchName = await searchResultPage.isSearchNameVisible()
    expect(isVisibleSearchName).toBe(true);
    const isTextContain = await searchResultPage.isSearchResultContainSearchText('spider-man')
    expect(isTextContain).toBe(true);

    const isVisibleMoreResult = await searchResultPage.isMoreResultVisible()
    expect(isVisibleMoreResult).toBe(true);
    const isVisibleAdvancedSearch = await searchResultPage.isAdvancedSearchVisible()
    expect(isVisibleAdvancedSearch).toBe(true);
    const isVisiblePeople = await searchResultPage.isPeopleVisible()
    expect(isVisiblePeople).toBe(true);
    const isVisibleTitlesText = await searchResultPage.isTitlesTextVisible()
    expect(isVisibleTitlesText).toBe(true);
  });
});
