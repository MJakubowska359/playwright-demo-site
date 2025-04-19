import { GeneralPage } from '../src/pages/general.page';
import { NotePage } from '../src/pages/note.page';
import { note } from '../src/test-data/data.data';
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

  test('Should be able to write text in editor', async () => {
    // Arrange
    const expectedHeader = note.header;

    // Act & Assert
    await expect(notePage.header.nth(1)).toHaveText(expectedHeader);
    await notePage.deleteDefaultText();
    await notePage.writeFirstNoteByComicSansFont();
  });
});
