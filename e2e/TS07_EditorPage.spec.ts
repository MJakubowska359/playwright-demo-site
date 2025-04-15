import { EditorPage } from '../src/pages/editor.page';
import { GeneralPage } from '../src/pages/general.page';
import { editor } from '../src/test-data/data.data';
import { expect, test } from '@playwright/test';

test.describe('Editor testing', () => {
  let generalPage: GeneralPage;
  let editorPage: EditorPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    editorPage = new EditorPage(page);

    await page.goto('/CKEditor.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to write text in editor', async () => {
    // Arrange
    const expectedHeader = editor.header;

    // Act & Assert
    await expect(editorPage.header.nth(1)).toHaveText(expectedHeader);
    await editorPage.writeFirstSentence();
  });
});
