import { GeneralPage } from '../src/pages/general.page';
import { UploadDownloadPage } from '../src/pages/uploadDownload.page';
import { zoom } from '../src/test-data/data.data';
import { expect, test } from '@playwright/test';

test.describe('Upload FIle testing', () => {
  let generalPage: GeneralPage;
  let uploadDownloadPage: UploadDownloadPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    uploadDownloadPage = new UploadDownloadPage(page);

    await page.goto('/FileUpload.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to upload file and zoom', async ({ page }) => {
    // Arrange
    const expectedZoomHeader = zoom.header;

    // Act
    await uploadDownloadPage.selectFileToUpload();
    await uploadDownloadPage.clickZoomOption();
    await page.waitForLoadState('load');

    // Assert
    await expect(uploadDownloadPage.zoomHeader).toHaveText(expectedZoomHeader);
  });

  test('Should be able to upload file and remove', async ({ page }) => {
    // Act
    await uploadDownloadPage.selectFileToUpload();
    await uploadDownloadPage.clickRemoveButton();
    await page.waitForLoadState('load');

    // Assert
    await expect(uploadDownloadPage.removeButton).toBeHidden();
  });
});
