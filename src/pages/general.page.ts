import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class GeneralPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for buttons
  rejectButton = this.page.getByRole('button', {
    name: 'Consent',
    exact: true,
  });
  acceptButton = this.page.getByRole('button', { name: 'Do not consent' });

  async clickRejectButton(): Promise<void> {
    await this.rejectButton.click();
  }

  async clickAcceptButton(): Promise<void> {
    await this.acceptButton.click();
  }
}
