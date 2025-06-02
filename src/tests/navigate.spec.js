import { test, expect } from '@playwright/test';

test.describe("Navigering", () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	
	test("Navigera till 'Katalog' efter annan vy, och kontrollera att en bok visas", async ({ page }) => {
		
		await page.getByRole("button", { name: "Lägg till bok" }).click();
		await page.getByRole("button", { name: "Katalog" }).click();
		await expect(page.getByText("Bertil Flimmer")).toBeVisible();
	});

	test("Navigera till 'Lägg till bok' och kontrollera att 'Författare'-fältet visas", async ({ page }) => {

		await page.getByRole("button", { name: "Lägg till bok" }).click();
		await expect(page.getByTestId("add-input-author")).toBeVisible();
	});
	
	test("Navigera till 'Mina böcker' och kontrollera att texten visas", async ({ page }) => {

		await page.getByRole("button", { name: "Mina böcker" }).click();
		await expect(page.getByText("dina favoritböcker")).toBeVisible();
	});
	
	
	
});
