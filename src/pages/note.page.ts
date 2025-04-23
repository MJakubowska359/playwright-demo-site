/* eslint-disable playwright/no-wait-for-timeout */
import {
  CuriositiesSource,
  firstNote,
  fontsImage,
  secondNote,
} from '../test-data/data.data';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class NotePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for note
  toolbarOption = this.page.locator('.btn-sm');
  fontButton = this.page.locator('.dropdown-fontname span');
  noteBody = this.page.locator('.note-editable');
  noteContent = this.page
    .locator('div')
    .filter({ hasText: /^Hello Summernote$/ });
  imageUrlInput = this.page.locator('.note-image-url');
  insertImageButton = this.page.getByRole('button', { name: 'Insert Image' });
  quoteStyle = this.page.getByRole('link').filter({ hasText: 'blockquote' });
  paragraphStyle = this.page.getByRole('link', { name: 'p', exact: true });
  headingSixStyle = this.page.getByRole('link', { name: 'h6' });
  greenTextColor = this.page
    .locator('div:nth-child(2) > button:nth-child(4)')
    .first();

  // Locators for assertions
  header = this.page.getByRole('heading');
  addedNote = this.page.getByRole('paragraph');
  addedImage = this.page.getByRole('paragraph').getByRole('img');
  imageSize = this.page.getByText('610x488');

  async deleteDefaultText(): Promise<void> {
    await this.noteBody.press('Control+A');
    await this.noteBody.press('Backspace');
  }

  async clickCenterContent(): Promise<void> {
    await this.toolbarOption.nth(9).click();
    await this.page.waitForTimeout(3000);
    await this.toolbarOption.nth(11).click();
  }

  async writeFirstNoteByComicSansFont(): Promise<void> {
    await this.toolbarOption.nth(4).click();
    await this.fontButton.nth(2).click();
    await this.noteBody.pressSequentially(firstNote.content);
  }

  async clickImageButton(): Promise<void> {
    await this.toolbarOption.nth(18).click();
  }

  async addImage(): Promise<void> {
    await this.imageUrlInput.pressSequentially(fontsImage.url);
    await this.insertImageButton.click();
    await this.page.waitForTimeout(3000);
  }

  async clickAddedImage(): Promise<void> {
    await this.addedImage.click();
  }

  async changeTextStyle(): Promise<void> {
    await this.toolbarOption.first().click();
    await this.quoteStyle.click();
    await this.noteBody.pressSequentially(secondNote.content);
  }

  async writeCuriositiesSource(): Promise<void> {
    await this.noteBody.press('Enter');
    await this.noteBody.press('Enter');
    await this.toolbarOption.nth(6).click();
    await this.greenTextColor.click();
    await this.toolbarOption.first().click();
    await this.headingSixStyle.click();
    await this.noteBody.pressSequentially(CuriositiesSource.url);
  }

  async addSpace(): Promise<void> {
    await this.noteBody.press('Enter');
  }

  async clearStyleAndFont(): Promise<void> {
    await this.toolbarOption.nth(4).click();
    await this.fontButton.nth(4).click();
    await this.toolbarOption.first().click();
    await this.paragraphStyle.click();
  }
}
