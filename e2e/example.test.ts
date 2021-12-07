import { expect, test } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://juejin.cn/");
  const title = page.locator("title");
  await expect(title).toContainText("掘金");
});
