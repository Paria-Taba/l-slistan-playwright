import { test, expect } from '@playwright/test';

test.describe("Navigering", () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	test("Går från 'Katalog' till 'Lägg till bok' och vidare till 'Mina böcker' visar rätt innehåll",async({page})=>{
		await page.getByRole("button", { name: "Lägg till bok" }).click();
		const input=page.getByTestId("add-input-author")
		await expect(input).toBeVisible()

		await page.getByRole("button", { name: "Mina böcker" }).click();
		const text=page.getByText("dina favoritböcker")
		await expect(text).toBeVisible()
		

	}
)
	
	test("Går från 'Lägg till bok' till 'katalog' och vidare till 'Mina böcker' visar rätt innehåll", async ({ page }) => {
		
		await page.getByRole("button", { name: "Lägg till bok" }).click();
		await page.getByRole("button", { name: "Katalog" }).click();
		await expect(page.getByText("Bertil Flimmer")).toBeVisible();

		await page.getByRole("button", { name: "Mina böcker" }).click();
		const text=page.getByText("dina favoritböcker")
		await expect(text).toBeVisible()
	});

	
	test("Går från 'Mina böcker' till 'katalog' och vidare till 'Lägg till bok' visar rätt innehåll", async ({ page }) => {

		await page.getByRole("button", { name: "Mina böcker" }).click();
		await expect(page.getByText("dina favoritböcker")).toBeVisible();

		await page.getByRole("button", { name: "Katalog" }).click();
		await expect(page.getByText("Bertil Flimmer")).toBeVisible();
		
		await page.getByRole("button", { name: "Lägg till bok" }).click();
		await expect(page.getByTestId("add-input-author")).toBeVisible();
	});
	
	
	
});
