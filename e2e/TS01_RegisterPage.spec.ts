import { GeneralPage } from '../src/pages/general.page';
import { HomePage } from '../src/pages/home.page';
import { RegisterPage } from '../src/pages/register.page';
import { expect, test } from '@playwright/test';

test.describe('Register form testing', () => {
  let homePage: HomePage;
  let generalPage: GeneralPage;
  let registerPage: RegisterPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    generalPage = new GeneralPage(page);
    registerPage = new RegisterPage(page);

    await page.goto('/');
    await homePage.clickSkipButton();
    await generalPage.clickAcceptButton();
  });

  test('Should be able to check attribute for required fields', async () => {
    // Arrange
    const expectedAttribute = 'required';

    // Act
    await registerPage.clickSubmitButton();

    // Assert
    await expect(registerPage.invalidInput.first()).toHaveAttribute(
      expectedAttribute,
    );
  });
});
