import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class DatePickerPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Locators for form
  calendarIcon = this.page.locator('.col-xs-1');
  thirteenthDayOfMonth = this.page.getByRole('link', { name: '13' });
  twentyNinthDayOfMonth = this.page.getByTitle('Select Thursday, May 29, 2025');
  dateFromInput = this.page.locator('#datepicker1');
  dateToInput = this.page.locator('#datepicker2');
  nextMonth = this.page.getByRole('link', { name: 'Next>' });

  async chooseDateFromCalendar(): Promise<void> {
    await this.calendarIcon.click();
    await this.thirteenthDayOfMonth.click();
    await this.dateFromInput.blur();
  }

  async chooseDateToCalendar(): Promise<void> {
    await this.dateToInput.click();
    await this.nextMonth.click();
    await this.twentyNinthDayOfMonth.click();
    await this.dateToInput.blur();
  }
}
