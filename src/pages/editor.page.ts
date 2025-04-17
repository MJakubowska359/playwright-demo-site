import { firstSentence } from '../test-data/data.data';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class EditorPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for form
  iframe = this.page
    .locator('iframe[title="Rich Text Editor, editor1"]')
    .contentFrame()
    .locator('.cke_editable');
  bodyButton = this.page.getByRole('button', { name: 'element body' });
  boldButton = this.page.getByTitle('Bold');
  maximizeButton = this.page.getByRole('button', {
    name: 'Maximize',
  });
  minimizeButton = this.page.getByRole('button', {
    name: 'Minimize',
  });

  // Locators for assertions
  header = this.page.getByRole('heading');

  async writeFirstSentence(): Promise<void> {
    await this.iframe.pressSequentially(firstSentence.content);
  }

  async boldFirstSentence(): Promise<void> {
    await this.iframe.press('Control+A');
    await this.boldButton.click();
  }

  async maximizeEditorSize(): Promise<void> {
    await this.maximizeButton.click();
  }

  async minimizeEditorSize(): Promise<void> {
    await this.minimizeButton.click();
  }
}
