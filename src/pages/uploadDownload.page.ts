import { uploadFile as avatar } from '../test-data/data.data';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class UploadDownloadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for buttons
  addFileInput = this.page.locator('input[type=file]');
  zoomButton = this.page.locator('.file-footer-buttons').first();
  removeButton = this.page.getByRole('button', { name: 'Remove' });

  // Locators for assertions
  zoomHeader = this.page.locator('.modal-title');

  async selectFileToUpload(): Promise<void> {
    await this.addFileInput.setInputFiles(avatar.file);
  }

  async clickZoomOption(): Promise<void> {
    await this.zoomButton.click();
  }

  async clickRemoveButton(): Promise<void> {
    await this.removeButton.click();
  }
}
