import { test, expect } from '@playwright/test';

test.describe("navigering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
  });

  test("katalog-vy", async({page})=>{
const buttonDisable=page.getByRole("button",{name:"katalog"})
await expect (buttonDisable).toBeDisabled()

	const text=page.getByText("Kim Vilsen")
	await expect (text).toBeVisible()
  })

test("Klicka på 'Lägg till bok' och kontrollera att fältet 'Författare' visas", async ({ page }) => {

    await page.getByRole("button", { name: "Lägg till bok" }).click();
    const authorInput = page.getByTestId("add-input-author");
    await expect(authorInput).toBeVisible();
  });

    test("mina-böcker-vy", async({page})=>{
await page.getByRole("button",{name:"Mina böcker"}).click()

  })

});
