import { GeneralPage } from '../src/pages/general.page';
import { UploadDownloadPage } from '../src/pages/uploadDownload.page';
import { expect, test } from '@playwright/test';

test.describe('Download file testing', () => {
  let generalPage: GeneralPage;
  let uploadDownloadPage: UploadDownloadPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    uploadDownloadPage = new UploadDownloadPage(page);

    await page.goto('/FileDownload.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to download PDF file', async () => {
    // Arrange
    const expectedCharactersAmountAfterFilledBox = '987 characters remaining';

    // Act
    await uploadDownloadPage.fillTextbox();
    await expect(uploadDownloadPage.charactersAmount).toHaveText(
      expectedCharactersAmountAfterFilledBox,
    );
    await uploadDownloadPage.clickGenerateFileButton();
    await uploadDownloadPage.clickDownloadButton();

    // Assert
    await uploadDownloadPage.checkDownloadedPdfFile();
  });
});
