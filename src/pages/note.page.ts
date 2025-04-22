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
  paragraphStyleList = this.page.getByRole('button', { name: 'Helvetica' });
  fontButton = this.page.locator('.dropdown-fontname span');
  noteBody = this.page.locator('.note-editable');
  noteContent = this.page
    .locator('div')
    .filter({ hasText: /^Hello Summernote$/ });
  pictureButton = this.page.locator('.note-icon-picture');
  imageUrlInput = this.page.locator('.note-image-url');
  insertImageButton = this.page.getByRole('button', { name: 'Insert Image' });
  styleList = this.page.getByRole('button', { name: ' ' });
  quoteStyle = this.page.getByRole('link').filter({ hasText: 'blockquote' });
  paragraphStyle = this.page.getByRole('link', { name: 'p', exact: true });
  headingFiveStyle = this.page.getByRole('link', { name: 'h5' });
  textColor = this.page.getByRole('button', { name: '', exact: true });
  greenTextColor = this.page
    .locator('div:nth-child(2) > button:nth-child(4)')
    .first();

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

  async clickImageButton(): Promise<void> {
    await this.pictureButton.click();
  }

  async addImage(): Promise<void> {
    await this.imageUrlInput.pressSequentially(fontsImage.url);
    await this.insertImageButton.click();
  }

  async changeTextStyle(): Promise<void> {
    await this.styleList.click();
    await this.quoteStyle.click();
    await this.noteBody.pressSequentially(secondNote.content);
  }

  async writeCuriositiesSource(): Promise<void> {
    await this.noteBody.press('Enter');
    // await this.styleList.click();
    // await this.paragraphStyle.click();
    await this.textColor.click();
    await this.greenTextColor.click();
    await this.styleList.click();
    await this.headingFiveStyle.click();
    await this.noteBody.pressSequentially(CuriositiesSource.url);
  }
}
