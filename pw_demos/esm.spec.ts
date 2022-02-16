import { test, expect } from '@playwright/test';
import googlePage from "./google.page.mjs";

test('basic test', async ({ page }) => {
  await page.goto('https://google.com/');
  const title = googlePage.input(page);
  await expect(title).toHaveText('');
});