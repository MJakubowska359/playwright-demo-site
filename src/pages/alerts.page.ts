import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class AlertsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  tab = this.page.locator('.analystic');
  button = this.page.getByRole('button');

  async clickAlertWithOK(): Promise<void> {
    await this.tab.first().click();
  }

  async clickAlertWithOKAndCancel(): Promise<void> {
    await this.tab.nth(1).click();
  }

  async clickAlertWithTextbox(): Promise<void> {
    await this.tab.nth(2).click();
  }

  async clickButton(): Promise<void> {
    await this.button.click();
  }
}
