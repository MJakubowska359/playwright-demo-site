import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class ModalsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for modals
  modal = this.page.getByRole('link', { name: 'Launch modal' });
  closeButton = this.page.getByRole('button', { name: 'Close' });

  // Locators for assertions
  header = this.page.getByRole('heading');
  modalHeader = this.page.locator('.panel-heading');

  async clickBootstrapModal(): Promise<void> {
    await this.modal.first().click();
  }

  async clickCloseButtonInModal(): Promise<void> {
    await this.closeButton.first().click();
  }

  async clickSaveModalButton(): Promise<void> {
    await this.closeButton.first().click();
  }

  async clickBootstrapModalInMultipleModal(): Promise<void> {
    await this.modal.nth(1).click();
  }
}
