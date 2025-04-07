import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for buttons
  signInButton = this.page.getByRole('button', {
    name: 'Sign In',
    exact: true,
  });
  skipButton = this.page.getByRole('button', { name: 'Skip Sign In' });

  async clickSingInButton(): Promise<void> {
    await this.signInButton.click();
  }

  async clickSkipButton(): Promise<void> {
    await this.skipButton.click();
  }
}
