import { test, expect } from '@playwright/test';

test('get started link1', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log('aaaaaaaaaaaaaaaaa')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link2', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  console.log('bbbbbbbbbbbbbbbbb')

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
