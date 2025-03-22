import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config(); 

test.describe('Sistema alumnos', () => { 
  test('Tiene un titulo', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/alumnosnotas/`);

    await expect(page).toHaveTitle(/Login Alumnos/);

    await page.waitForSelector('[name="ctl00$ContentPlaceHolder1$TextBox1"]');
    await page.locator('[name="ctl00$ContentPlaceHolder1$TextBox1"]').fill('admin');
    await page.locator('[name="ctl00$ContentPlaceHolder1$Clave"]').fill('admin');
    await page.locator('[name="ctl00$ContentPlaceHolder1$ImageButton1"]').click();
    //redirigir la url {urlBase}/alumnosnotas/Proteccion/Inicio.aspx
    await expect(page).toHaveURL(`${process.env.BASE_URL}/alumnosnotas/Proteccion/Inicio.aspx`);
    //visualizar mensaje de error
    await expect(page.locator('[id="ctl00_ContentPlaceHolder1_Label2"]')).toHaveText('La combinación de usuario y clave no coincide');
  });
});


