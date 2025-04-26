import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class ModalsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for modals
  modal = this.page.getByRole('link', { name: 'Launch modal' });
  closeButton = this.page.getByRole('button', { name: 'Close' });
  saveButton = this.page.getByRole('button', { name: 'Save changes' });
  launchModalButton = this.page
    .locator('#myModalMulti')
    .getByRole('link', { name: 'Launch modal' });

  // Locators for assertions
  header = this.page.getByRole('heading');
  modalHeader = this.page.locator('.panel-heading');
  modalTitle = this.page.locator('.modal-title');

  async clickBootstrapModal(): Promise<void> {
    await this.modal.first().click();
  }

  async clickMultipleModal(): Promise<void> {
    await this.modal.nth(1).click();
  }

  async clickCloseButtonInModal(): Promise<void> {
    await this.closeButton.first().click();
  }

  async clickSaveModalButton(): Promise<void> {
    await this.saveButton.first().click();
  }

  async clickLaunchModalInMultipleModal(): Promise<void> {
    await this.launchModalButton.click();
  }
}
