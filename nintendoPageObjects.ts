import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class NINTENDO extends BasePage {


//Selectors
searchBar: By = By.xpath('(//input[@class="AutoCompleteInputstyles__ActiveInput-sc-a36a8l-1 hZuPeF SearchInputstyles__Input-sc-n42o5d-4 ciNlOG"])')
gamesTab: By = By.xpath('(//span[@class="DropdownButtonstyles__CaratContainer-sc-157lcb8-2 buwwcL"])[2]')
comingSoon: By = By.xpath('(//p[@class="Textstyles__StyledCaption-sc-14mne8t-1 cdPvwV"])[3]')
characterOrSeriesFilter: By = By.xpath('(//button[@class="AttributeFilterSetstyles__StyledButton-sc-1jr5r9i-1 TAfEh"])[6]')
marioGamesFilter: By = By.xpath('(//label[@class="styled-checkbox-radio-button-mixins__StyledLabel-sc-1488pqa-1 huWKnq"])[15]')
newsTab: By = By.xpath('(//span[@class="Textstyles__StyledTitle-sc-14mne8t-0 kBSBBf"])[4]')
gameNewsFilter: By = By.xpath('(//span[@class="Buttonstyles__Span-sc-63wrer-0 JiLcH"])[4]')
pokemonNews: By = By.xpath('(//h3[@class="BasicTilestyles__Title-sc-sh8sf3-13 fDuLOS"])[1]')
bestSellerList: By = By.xpath('(//span[@class="Linkstyles__StyledContents-sc-1uaqluf-0 ftNwjJ"])[7]')
marioKart: By = By.xpath('(//h3[@class="BasicTilestyles__Title-sc-sh8sf3-13 bdVMSb"])[3]')
physicalCopy: By = By.xpath('(//div[@class="RadioDetailedstyles__StyledCard-sc-1n7uq3p-4 lngqAK OptionDisplaysstyles__StyledRadioDetailed-sc-1gjfchr-0 zQXqq"])')
addQuantity: By = By.xpath('(//button[@class="QuantitySelectorstyles__Button-sc-mrkana-1 fEuonD"])[2]')
addToCartButton: By = By.xpath('(//button[@class="Buttonstyles__Button-sc-63wrer-1 iwvLXN"])')
viewPicture: By = By.xpath('(//div[@class="Imagestyles__ImageWrapper-sc-1oi2gnz-0 kccoBf"])[6]')
nextSlide: By = By.xpath('(//span[@class="Buttonstyles__Span-sc-63wrer-0 JiLcH"])[7]')
playVideo: By = By.xpath('(//span[@class="vjs-icon-placeholder"])[16]')
exitVideo: By = By.xpath('(//span[@class="Buttonstyles__Span-sc-63wrer-0 JiLcH"])[5]')


//Text Fields
comingSoonGreeting: By = By.xpath('(//h1[@class="Headingstyles__StyledH-sc-qpned7-0 HUGKw"])')
marioGamesFilterResults: By = By.xpath('(//h3[@class="BasicTilestyles__Title-sc-sh8sf3-13 bdVMSb"])')
pokemonNewsParagraph: By = By.xpath('(//p[@class="RichTextstyles__Paragraph-sc-1ensjc6-0 bxcFnO"])[1]')
quantityValue: By = By.xpath('(//div[@class="QuantitySelectorstyles__Quantity-sc-mrkana-2 huQYTb"])')
quantityInCart: By = By.xpath('(//div[@class="CountBadge-sc-1pmoice-0 ConnectedCartCounterstyles__CartCounter-sc-1alqogb-1 cUzgGj beNDQk"])')


//Methods
constructor() {
    super({url: "https://www.nintendo.com"});
}

async search(searchTerm: string) {
    return this.setInput(this.searchBar, `${searchTerm}\n`)
}

async readComingSoonGreeting() {
    return this.getText(this.comingSoonGreeting)
}

async readMarioGamesFilterResults() {
    return this.getText(this.marioGamesFilterResults)
}

async readPokemonNewsParagraph() {
    return this.getText(this.pokemonNewsParagraph)
}

async readQuantityValue() {
    return this.getText(this.quantityValue)
}

async readQuantityInCart() {
    return this.getText(this.quantityInCart)
}

}