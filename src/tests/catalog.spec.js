import { test, expect } from '@playwright/test';

test.describe("katalog-vy", () => {
	
	test.beforeEach(async ({ page }) => {
		await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/');
	});
	
	
	  test('Varje bok visar både titel och författare', async ({ page }) => {
    const booksWithAuthors = [
      {
        title: "Hur man tappar bort sin TV-fjärr 10 gånger om dagen",
        author: "Bertil Flimmer",
      },
      {
        title: "Kaffekokaren som visste för mycket",
        author: "Saga Espresson",
      },
      {
        title: "Min katt är min chef",
        author: "Kattis Jamsson",
      },
      {
        title: "100 sätt att undvika måndagar",
        author: "Göran Snooze",
      },
      {
        title: "Gräv där du står – och hitta en pizzameny",
        author: "Maja Skruv",
      },
      {
        title: "Jag trodde det var tisdag",
        author: "Kim Vilsen",
      },
      {
        title: "Att prata med växter – och vad de egentligen tycker om dig",
        author: "Flora Tistel",
      },
    ];

    for (const book of booksWithAuthors) {
      await expect(page.getByText(book.title)).toBeVisible();
      await expect(page.getByText(book.author)).toBeVisible();
    }
  });
 
  test("Klicka på hjärtat för att favoritmarkera en bok  Kontrollera att den visas i 'Mina böcker'", async({page})=>{

	await page.getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen").click();
	await page.getByRole("button", {name:"Mina böcker"}).click()
	const myBok=page.getByText("Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
	await expect(myBok).toBeVisible()

  })

   
  test("Klicka på hjärtat för att favoritmarkera flera böcker och Kontrollera att de visas i 'Mina böcker'", async({page})=>{

	await page.getByTestId("star-Hur man tappar bort sin TV-fjärr 10 gånger om dagen").click();
	await page.getByTestId("star-Jag trodde det var tisdag").click()
	await page.getByRole("button", {name:"Mina böcker"}).click()
	const myBok=page.getByText("Hur man tappar bort sin TV-fjärr 10 gånger om dagen")
	await expect(myBok).toBeVisible()
	const myBokTwo=page.getByText("Jag trodde det var tisdag")
	await expect(myBokTwo).toBeVisible()

  })
  
  test("Klicka på hjärtat igen för att ta bort favoritmarkering",async({page})=>{
	
	await page.getByTestId("star-100 sätt att undvika måndagar").click()
	await page.getByTestId("star-100 sätt att undvika måndagar").click()
	await page.getByRole("button",{name:"Mina böcker"}).click()
	const mybok=page.getByText("100 sätt att undvika måndagar")
	await expect(mybok).not.toBeVisible()
	

  })
  test("Favoritmarkera → avmarkera → favoritmarkera igen, och kontrollera att boken visas korrekt i 'Mina böcker'", async({page})=>{
	await page.getByTestId("star-100 sätt att undvika måndagar").click()
	await page.getByTestId("star-100 sätt att undvika måndagar").click()
	await page.getByTestId("star-100 sätt att undvika måndagar").click()
	await page.getByRole("button",{name: "Mina böcker"}).click()
	const text=page.getByText("100 sätt att undvika måndagar")
	await expect(text).toBeVisible()


  })
	
	
});
