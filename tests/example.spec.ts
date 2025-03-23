import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config(); 


//TEST INVALIDOS
test.describe('Sistema alumnos, DNI: 666 Pass: demo', () => { 
  test('Test Invalido n°1', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/alumnosnotas/`);

    await expect(page).toHaveTitle(/Login Alumnos/);

    await page.waitForSelector('[name="ctl00$ContentPlaceHolder1$TextBox1"]');
    await page.locator('[name="ctl00$ContentPlaceHolder1$TextBox1"]').fill('666');
    await page.locator('[name="ctl00$ContentPlaceHolder1$Clave"]').fill('demo');
    await page.locator('[name="ctl00$ContentPlaceHolder1$ImageButton1"]').click();
    await expect(page.locator('[id="ctl00_ContentPlaceHolder1_Label2"]')).toHaveText('La combinación de usuario y clave no coincide');
  });
});

  test.describe('Sistema alumnos, DNI: abc Pass: demo', () => { 
    test('Test invalido n°2', async ({ page }) => {
      await page.goto(`${process.env.BASE_URL}/alumnosnotas/`);

      await expect(page).toHaveTitle(/Login Alumnos/);

      await page.waitForSelector('[name="ctl00$ContentPlaceHolder1$TextBox1"]');
      await page.locator('[name="ctl00$ContentPlaceHolder1$TextBox1"]').fill('abc');
      await page.locator('[name="ctl00$ContentPlaceHolder1$Clave"]').fill('demo');
      await page.locator('[name="ctl00$ContentPlaceHolder1$ImageButton1"]').click();
      await expect(page.locator('[id="ctl00_ContentPlaceHolder1_Label2"]')).toHaveText('La combinación de usuario y clave no coincide o no tiene permisos');
    });
  });

//TEST VALIDOS

