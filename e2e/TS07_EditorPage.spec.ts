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

  test('Should be able to bold text in editor', async () => {
    // Arrange
    const expectedHeader = editor.header;

    // Act & Assert
    await expect(editorPage.header.nth(1)).toHaveText(expectedHeader);
    await editorPage.writeFirstSentence();
    await editorPage.boldFirstSentence();
  });

  test('Should be able to change format paragraph for the first sentence', async () => {
    // Arrange
    const expectedHeader = editor.header;

    // Act & Assert
    await expect(editorPage.header.nth(1)).toHaveText(expectedHeader);
    await editorPage.writeFirstSentence();
    await editorPage.changeFormatOfFirstSentence();
    await editorPage.writeSecondSentence();
  });

  test('Should be able to change editor size', async () => {
    // Arrange
    const expectedHeader = editor.header;

    // Act
    await editorPage.maximizeEditorSize();
    await expect(editorPage.header.nth(1)).toBeHidden();
    await editorPage.minimizeEditorSize();

    // Assert
    await expect(editorPage.header.nth(1)).toHaveText(expectedHeader);
  });
});
