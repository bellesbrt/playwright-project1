import { test, expect } from '@playwright/test';

test('login com sucesso', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory/);
});

test('login inválido', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'erro');
  await page.fill('[data-test="password"]', 'erro');
  await page.click('[data-test="login-button"]');

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});