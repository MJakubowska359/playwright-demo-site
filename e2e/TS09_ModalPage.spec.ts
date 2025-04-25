import { GeneralPage } from '../src/pages/general.page';
import { ModalsPage } from '../src/pages/modals.page';
import { modalPage, singleModal } from '../src/test-data/data.data';
import { expect, test } from '@playwright/test';

test.describe('Modals testing', () => {
  let generalPage: GeneralPage;
  let modalsPage: ModalsPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    modalsPage = new ModalsPage(page);

    await page.goto('/Modals.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to open and close single modal', async () => {
    // Arrange
    const expectedModalHeader = singleModal.header;
    const expectedModalPageHeader = modalPage.header;

    // Act
    await modalsPage.clickBootstrapModal();
    await expect(modalsPage.header.nth(1)).toHaveText(expectedModalHeader);
    await modalsPage.clickCloseButtonInModal();
    await modalsPage.clickBootstrapModal();
    await modalsPage.clickSaveModalButton();

    // Assert
    await expect(modalsPage.modalHeader.first()).toHaveText(
      expectedModalPageHeader,
    );
  });
});
