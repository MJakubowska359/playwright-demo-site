import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for inputs
  formInput = this.page.locator('.form-control');
  genderRadio = this.page.getByRole('radio');
  hobbiesCheckbox = this.page.getByRole('checkbox');

  // Locators for buttons
  submitButton = this.page.getByRole('button', { name: 'Submit' });
  refreshButton = this.page.getByRole('button', { name: 'Refresh' });

  // Locators for assertions
  invalidInput = this.page.locator('input[type=text]');

  async clickSubmitButton(): Promise<void> {
    await this.submitButton.click();
  }
}
