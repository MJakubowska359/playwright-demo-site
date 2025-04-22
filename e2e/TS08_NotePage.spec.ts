/* eslint-disable playwright/no-wait-for-timeout */
import { GeneralPage } from '../src/pages/general.page';
import { NotePage } from '../src/pages/note.page';
import { image, note } from '../src/test-data/data.data';
import { expect, test } from '@playwright/test';

test.describe('Note testing', () => {
  let generalPage: GeneralPage;
  let notePage: NotePage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    notePage = new NotePage(page);

    await page.goto('/SummerNote.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to write text in note', async () => {
    // Arrange
    const expectedHeader = note.header;

    // Act & Assert
    await expect(notePage.header.nth(1)).toHaveText(expectedHeader);
    await notePage.deleteDefaultText();
    await notePage.writeFirstNoteByComicSansFont();
  });

  test('Should be able to add image', async ({ page }) => {
    // Arrange
    const expectedHeader = image.header;
    const expectedPageHeader = note.header;

    // Act & Assert
    await notePage.deleteDefaultText();
    await notePage.clickImageButton();
    await expect(notePage.header.nth(2)).toHaveText(expectedHeader);
    await notePage.addImage();
    await page.waitForTimeout(2000);
    await expect(notePage.header.nth(1)).toHaveText(expectedPageHeader);
  });

  test('Should be able to write quote and add source in note', async () => {
    // Arrange
    const expectedHeader = note.header;

    // Act & Assert
    await expect(notePage.header.nth(1)).toHaveText(expectedHeader);
    await notePage.deleteDefaultText();
    await notePage.changeTextStyle();
    await notePage.writeCuriositiesSource();
  });
});
