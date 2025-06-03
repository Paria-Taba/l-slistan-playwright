import { test, expect } from '@playwright/test';

test.describe("Mina böcker-vy", () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	
	test("Navigera till 'Mina böcker' och Kontrollera att alla favoriter visas", async ({ page }) => {
		await page.getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen").click()
		await page.getByTestId("star-100 sätt att undvika måndagar").click()
		await page.getByRole("button", {name:"mina böcker"}).click()
		const favoriteOne= page.getByText("Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
		await expect(favoriteOne).toBeVisible();
		const favoriteTwo= page.getByText("100 sätt att undvika måndagar")
		await expect(favoriteTwo).toBeVisible();
	
	});
	test("Testa att inga böcker är markerade som favoriter",async({page})=>{
			await page.getByRole("button", {name:"mina böcker"}).click()
			const text=page.getByText("När du valt, kommer dina favoritböcker att visas här.")
			await expect(text).toBeVisible()
	})
	
});
