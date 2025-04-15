import { firstSentence } from '../test-data/data.data';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class EditorPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for form
  iframe = this.page
    .frameLocator('iframe[title="Rich Text Editor, editor1"]')
    .locator('.cke_editable');

  // Locators for assertions
  header = this.page.getByRole('heading');

  async writeFirstSentence(): Promise<void> {
    await this.iframe.pressSequentially(firstSentence.content);
  }
}
