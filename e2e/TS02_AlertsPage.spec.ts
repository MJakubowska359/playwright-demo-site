import { AlertsPage } from '../src/pages/alerts.page';
import { GeneralPage } from '../src/pages/general.page';
import { expect, test } from '@playwright/test';

test.describe('Alerts testing', () => {
  let generalPage: GeneralPage;
  let alertsPage: AlertsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    alertsPage = new AlertsPage(page);

    await page.goto('/Alerts.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to accept alert with "OK" button', async ({ page }) => {
    // Arrange
    let messageText = '';
    const expectedTextInBrowserDialog = 'I am an alert box!';

    // Act
    await alertsPage.clickButton();
    page.on('dialog', async (dialog) => {
      messageText = dialog.message();
      await dialog.dismiss();
    });
    await alertsPage.clickButton();

    // Assert
    expect(messageText).toBe(expectedTextInBrowserDialog);
  });

  test('Should be able to accept alert with "OK" and "Cancel" button', async ({
    page,
  }) => {
    // Arrange
    let messageText = '';
    const expectedTextInBrowserDialog = 'Press a Button !';

    // Act
    await alertsPage.clickAlertWithOKAndCancel();
    await alertsPage.clickButton();
    page.on('dialog', async (dialog) => {
      messageText = dialog.message();
      await dialog.dismiss();
    });
    await alertsPage.clickButton();

    // Assert
    expect(messageText).toBe(expectedTextInBrowserDialog);
  });

  test('Should be able to accept alert with textbox', async ({ page }) => {
    // Arrange
    let messageText = '';
    const expectedTextInBrowserDialog = 'Please enter your name';

    // Act
    await alertsPage.clickAlertWithTextbox();
    await alertsPage.clickButton();
    page.on('dialog', async (dialog) => {
      messageText = dialog.message();
      await dialog.accept('Mia!');
    });
    await alertsPage.clickButton();
    page.waitForLoadState('load');

    // Assert
    expect(messageText).toBe(expectedTextInBrowserDialog);
  });
});
