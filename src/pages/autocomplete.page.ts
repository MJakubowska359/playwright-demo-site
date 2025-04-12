import { firstCountry, secondCountry } from '../test-data/data.data';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class AutocompletePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for form
  textInput = this.page.locator('#searchbox');
  chosenOptionFromList = this.page.getByRole('presentation');

  // Locators for assertions
  label = this.page.locator('#somelem');
  countryInField = this.page.locator('.ui-autocomplete-multiselect-item');

  async chooseFirstCountryFromList(): Promise<void> {
    await this.textInput.pressSequentially(firstCountry.name);
    await this.chosenOptionFromList.nth(6).click();
  }

  async chooseSecondCountryFromList(): Promise<void> {
    await this.textInput.pressSequentially(secondCountry.name);
    await this.chosenOptionFromList.first().click();
  }
}
