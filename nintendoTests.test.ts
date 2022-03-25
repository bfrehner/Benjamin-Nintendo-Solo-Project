import exp from "constants";
import { Driver } from "selenium-webdriver/chrome";
import { NINTENDO } from "./nintendoPageObjects";

const nintendo = new NINTENDO;


test("News Section",async () => {
    await nintendo.navigate();
    await nintendo.driver.manage().window().maximize();
    await nintendo.click(nintendo.newsTab);
    await nintendo.driver.sleep(3000);
    await nintendo.click(nintendo.gameNewsFilter);
    await nintendo.driver.sleep(3000);
    await nintendo.click(nintendo.pokemonNews);
    expect(await nintendo.readPokemonNewsParagraph()).toContain("fans will be able to encounter Arceus and befriend Darkrai")
})


test("Tabs, Sub-Categories, and Filters", async () => {
    await nintendo.navigate();
    await nintendo.click(nintendo.gamesTab);
    await nintendo.click(nintendo.comingSoon);
    expect(await nintendo.readComingSoonGreeting()).toContain("Coming soon")
    await nintendo.click(nintendo.characterOrSeriesFilter);
    await nintendo.click(nintendo.marioGamesFilter);
    expect(await nintendo.readMarioGamesFilterResults()).toContain("Mario Strikers™: Battle League")
})    


test("Best-Sellers List and Product Page", async () => {
    await nintendo.navigate();
    await nintendo.click(nintendo.bestSellerList);
    await nintendo.driver.sleep(3000);
    await nintendo.click(nintendo.marioKart);
    await nintendo.click(nintendo.viewPicture);
    await nintendo.driver.sleep(2000);
    await nintendo.click(nintendo.nextSlide);
    await nintendo.driver.sleep(1000);
    await nintendo.click(nintendo.playVideo);
    await nintendo.driver.sleep(9250);
    await nintendo.click(nintendo.exitVideo);
    await nintendo.driver.sleep(3000);
    await nintendo.click(nintendo.physicalCopy);
    await nintendo.driver.sleep(1000);
    await nintendo.click(nintendo.addQuantity);
    expect(await nintendo.readQuantityValue()).toContain("2");
    await nintendo.click(nintendo.addToCartButton);
    expect(await nintendo.readQuantityInCart()).toContain("2")
    await nintendo.driver.quit()
})