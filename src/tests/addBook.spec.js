import { test, expect } from '@playwright/test';

test.describe("lägg till bok-vy", () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	
	test("Lägg till bok med titel och författare och Kontrollera att den dyker upp i katalogen", async ({ page }) => {
		await page.getByRole("button",  {name:"Lägg till bok"}).click()
		await page.getByTestId("add-input-title").fill("Bästa vänner");
		await page.getByTestId("add-input-author").fill("Maria Andersson")
		await page.getByRole("button", {name:"Lägg till ny bok"}).click()
		await page.getByRole("button", {name:"katalog"}).click()
		const nyFörfattare=page.getByText("Maria andersson")
		await expect(nyFörfattare).toBeVisible()
		const nyTitel=page.getByText("Bästa vänner")
		await expect(nyTitel).toBeVisible()
		
	});
	test("Försök att lägga till en bok utan titel och kontrollera att 'lägg till ny bok'-knappen är inaktiverad",async({page})=>{
		await page.getByRole("button",  {name:"Lägg till bok"}).click()
		await page.getByTestId("add-input-author").fill("Sara Alavi")
		const addButton= page.getByRole("button", {name:"lägg till ny bok"})
		await expect(addButton).toBeDisabled
		
	})
	
	test("Försök lägga till bok utan författare och kontrollera att 'lägg till ny bok'-knappen är inaktiverads",async({page})=>{
		await page.getByRole("button",  {name:"Lägg till bok"}).click()
		await page.getByTestId("add-input-title").fill("My best goal")
		const addButton= page.getByRole("button", {name:"lägg till ny bok"})
		await expect(addButton).toBeDisabled
		
		
	})
	
	test("Kontrollera att formuläret nollställs efter inmatning", async ({ page }) => {
		
		await page.getByRole("button", { name: "Lägg till bok" }).click();
		await page.getByTestId("add-input-title").fill("Formulärtest");
		await page.getByTestId("add-input-author").fill("Test Författare");
		await page.getByRole("button", { name: "Lägg till ny bok" }).click();
		await expect(page.getByTestId("add-input-title")).toHaveValue("");
		await expect(page.getByTestId("add-input-author")).toHaveValue("");
	});
	
	
	
	
});
