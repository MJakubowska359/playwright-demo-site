import { GeneralPage } from '../src/pages/general.page';
import { NotePage } from '../src/pages/note.page';
import { firstNote, note } from '../src/test-data/data.data';
import { expect, test } from '@playwright/test';

test.describe('Note testing', () => {
  let generalPage: GeneralPage;
  let notePage: NotePage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    notePage = new NotePage(page);

    await page.goto('/SummerNote.html');
    await generalPage.clickAcceptButton();
    await notePage.deleteDefaultText();
  });

  test('Should be able to write text in note', async () => {
    // Arrange
    const expectedAddedNote = firstNote.content;

    // Act
    await notePage.writeFirstNoteByComicSansFont();

    // Assert
    await expect(notePage.addedNote).toHaveText(expectedAddedNote);
  });

  test('Should be able to add image', async () => {
    // Act
    await notePage.clickImageButton();
    await notePage.addImage();
    await notePage.clickAddedImage();

    // Assert
    await expect(notePage.imageSize).toBeVisible();
  });

  test('Should be able to write quote and add source in note', async () => {
    // Arrange
    const expectedHeader = note.header;

    // Act & Assert
    await expect(notePage.header.nth(1)).toHaveText(expectedHeader);
    await notePage.addSpace();
    await notePage.changeTextStyle();
    await notePage.writeCuriositiesSource();
  });

  test('Should be able to write full note', async () => {
    // Arrange
    const expectedHeader = note.header;

    // Act
    // await notePage.clickCenterContent();
    await notePage.writeFirstNoteByComicSansFont();
    await notePage.addSpace();
    // await notePage.clickCenterContent();
    await notePage.clickImageButton();
    await notePage.addImage();
    await notePage.addSpace();
    await notePage.clearStyleAndFont();
    await notePage.changeTextStyle();
    // await notePage.clickCenterContent();
    await notePage.writeCuriositiesSource();

    // Assert
    await expect(notePage.header.nth(1)).toHaveText(expectedHeader);
  });
});
