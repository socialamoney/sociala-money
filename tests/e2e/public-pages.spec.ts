import { expect, test } from "@playwright/test";

test("home page renders product identity", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("portefeuille numérique");
  await expect(page.getByRole("navigation", { name: "Navigation principale" })).toBeVisible();
});

test("auth login explains missing configuration instead of faking a session", async ({ page }) => {
  await page.goto("/auth/login");
  await expect(page.getByRole("heading", { name: "Connexion" })).toBeVisible();
});

test("public payment link does not invent a payment", async ({ page }) => {
  await page.goto("/pay/demo");
  await expect(page.getByRole("heading", { name: "Lien de paiement indisponible" })).toBeVisible();
});
