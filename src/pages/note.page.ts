import { firstNote } from '../test-data/data.data';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class NotePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for note
  paragraphStyleList = this.page.getByRole('button', { name: 'Helvetica' });
  fontButton = this.page.locator('.dropdown-fontname span');
  noteBody = this.page.locator('.note-editable');
  noteContent = this.page
    .locator('div')
    .filter({ hasText: /^Hello Summernote$/ });

  // Locators for assertions
  header = this.page.getByRole('heading');

  async deleteDefaultText(): Promise<void> {
    await this.noteBody.press('Control+A');
    await this.noteBody.press('Backspace');
  }

  async writeFirstNoteByComicSansFont(): Promise<void> {
    await this.paragraphStyleList.click();
    await this.fontButton.nth(2).click();
    await this.noteBody.pressSequentially(firstNote.content);
  }
}
