import { DatePickerPage } from '../src/pages/datePicker.page';
import { GeneralPage } from '../src/pages/general.page';
import { expect, test } from '@playwright/test';

test.describe('Date Picker testing', () => {
  let generalPage: GeneralPage;
  let datePickerPage: DatePickerPage;

  test.beforeEach(async ({ page }) => {
    generalPage = new GeneralPage(page);
    datePickerPage = new DatePickerPage(page);

    await page.goto('/Datepicker.html');
    await generalPage.clickAcceptButton();
  });

  test('Should be able to choose date in calendars', async ({ page }) => {
    // Arrange
    const expectedChosenDateFrom = '04/13/2025';
    const expectedChosenDateTo = '05/29/2025';

    // Act
    await datePickerPage.chooseDateFromCalendar();
    await page.waitForLoadState('load');
    await datePickerPage.chooseDateToCalendar();

    // Assert
    await expect(datePickerPage.dateFromInput).toHaveValue(
      expectedChosenDateFrom,
    );
    await expect(datePickerPage.dateToInput).toHaveValue(expectedChosenDateTo);
  });
});
