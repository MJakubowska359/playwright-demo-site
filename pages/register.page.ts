import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class RegisterPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}

// Locators for register page
