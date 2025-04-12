import { AutocompletePage } from '../src/pages/autocomplete.page';
import { GeneralPage } from '../src/pages/general.page';
import { expect, test } from '@playwright/test';

test.describe('Auto complete testing', () => {
  let generalPage: GeneralPage;
  let autoCompletePage: AutocompletePage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    autoCompletePage = new AutocompletePage(page);

    await page.goto('/AutoComplete.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to choose one country in auto complete field', async () => {
    // Arrange
    const expectedLabel = 'Check the autocomplete functionality here';
    const expectedChosenCountry = 'United States';

    // Act
    await expect(autoCompletePage.label).toHaveText(expectedLabel);
    await autoCompletePage.chooseFirstCountryFromList();

    // Assert
    await expect(autoCompletePage.countryInField).toHaveText(
      expectedChosenCountry,
    );
  });

  test('Should be able to choose two country in auto complete field', async () => {
    // Arrange
    const expectedChosenFirstCountry = 'United States';
    const expectedChosenSecondCountry = 'France';

    // Act
    await autoCompletePage.chooseFirstCountryFromList();
    await autoCompletePage.chooseSecondCountryFromList();

    // Assert
    await expect(autoCompletePage.countryInField.first()).toHaveText(
      expectedChosenFirstCountry,
    );
    await expect(autoCompletePage.countryInField.nth(1)).toHaveText(
      expectedChosenSecondCountry,
    );
  });
});
