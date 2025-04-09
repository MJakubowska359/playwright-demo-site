/* eslint-disable no-console */
import { pdfContent, pdfFileName, uploadFile } from '../test-data/data.data';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export class UploadDownloadPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for upload page
  addFileInput = this.page.locator('input[type=file]');
  zoomButton = this.page.locator('.file-footer-buttons').first();
  removeButton = this.page.getByRole('button', { name: 'Remove' });
  zoomHeader = this.page.locator('.modal-title');

  // Locators for download page
  textInput = this.page.locator('#pdfbox');
  generateFileButton = this.page.locator('#createPdf');
  downloadButton = this.page.getByRole('link', { name: 'Download' });
  charactersAmount = this.page.locator('#pdfarea_feedback');
  downloadFolder = path.resolve('downloads/');

  async selectFileToUpload(): Promise<void> {
    await this.addFileInput.setInputFiles(uploadFile.file);
  }

  async clickZoomOption(): Promise<void> {
    await this.zoomButton.click();
  }

  async clickRemoveButton(): Promise<void> {
    await this.removeButton.click();
  }

  async fillTextbox(): Promise<void> {
    await this.textInput.pressSequentially(pdfContent.content);
  }

  async clickGenerateFileButton(): Promise<void> {
    await this.generateFileButton.click();
  }

  async clickDownloadButton(): Promise<void> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadButton.nth(1).click();
    const download = await downloadPromise;

    await download.saveAs('downloads/' + download.suggestedFilename());
  }

  async checkDownloadedPdfFile(): Promise<void> {
    const expectedFileName = pdfFileName.name;

    try {
      const files = fs.readdirSync(this.downloadFolder);

      if (files.includes(expectedFileName)) {
        console.log(`Znaleziono plik: ${expectedFileName}`);
      } else {
        console.log(`Nie znaleziono pliku o nazwie: ${expectedFileName}`);
        throw new Error(`Nie znaleziono pliku o nazwie: ${expectedFileName}`);
      }
    } catch (error) {
      console.error(
        `Błąd podczas dostępu do folderu ${this.downloadFolder}:`,
        error,
      );
      throw error;
    }
  }
}
