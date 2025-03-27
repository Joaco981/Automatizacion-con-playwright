import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config(); 


test.describe('Sistema alumnos 2', () => {
  test('Consultar la condicion de cursado de una materia', async ({ page }) => {
    //Comprobar en la columna “condición”, si la materia “Algebra y lógica computacional” esté regularizada
    await page.goto(`${process.env.BASE_URL}/alumnosnotas/`);
    await expect(page).toHaveTitle(/Login Alumnos/);
    await page.locator('[name="ctl00$ContentPlaceHolder1$TextBox1"]').fill(process.env.USUARIO ?? '');
    await page.locator('[name="ctl00$ContentPlaceHolder1$Clave"]').fill(process.env.PASSWORD ?? '');
    await page.locator('[name="ctl00$ContentPlaceHolder1$ImageButton1"]').click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/alumnosnotas/Proteccion/Inicio.aspx`);
    await page.locator('[id="ctl00_AccordionPane2_header"]').click();
    //llamar al link reporte academico https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/ReportPadres.aspx?Sel=3
    await page.click('a[href="ReportPadres.aspx?Sel=3"]'); 
    const materia = 'Álgebra y Lógica Computacional';
    const fila = await page.locator(`//table//tr[td[contains(text(), '${materia}')]]`);
    await expect(fila).toBeVisible(); // Verifica que la fila exista
    await expect(fila.locator('td:nth-child(3)')).toHaveText('Regularizada');    
  });
});

test.describe('Sistema alumnos 2', () => { 
  test('Consultar la condicion de la materia Ingeniería de Software II', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/alumnosnotas/`);
    await expect(page).toHaveTitle(/Login Alumnos/);
    await page.locator('[name="ctl00$ContentPlaceHolder1$TextBox1"]').fill(process.env.USUARIO ?? '');
    await page.locator('[name="ctl00$ContentPlaceHolder1$Clave"]').fill(process.env.PASSWORD ?? '');
    await page.locator('[name="ctl00$ContentPlaceHolder1$ImageButton1"]').click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/alumnosnotas/Proteccion/Inicio.aspx`);
    await page.locator('[id="ctl00_AccordionPane2_header"]').click();
    await page.click('a[href="ReportPadres.aspx?Sel=3"]'); 
    const fila = await page.locator(`//table//tr[td[contains(text(), 'Ingeniería de Software II')]]`).first();
    await expect(fila).toBeVisible();
    await expect(fila.locator('td:nth-child(3)')).toHaveText('Cursando Actualmente');    
  });
});





//Comprobar en la columna “condición”, que la materia “Base de datos” este no cursada
test.describe('Sistema alumnos 3', () => {
  test('Comprobar en la columna “condición”, que la materia “Base de datos” este no cursada', async ({ page }) => {
      await page.goto(`${process.env.BASE_URL}/alumnosnotas/`);
      await expect(page).toHaveTitle(/Login Alumnos/);
      await page.locator('[name="ctl00$ContentPlaceHolder1$TextBox1"]').fill(process.env.USUARIO ?? '');
      await page.locator('[name="ctl00$ContentPlaceHolder1$Clave"]').fill(process.env.PASSWORD ?? '');
      await page.locator('[name="ctl00$ContentPlaceHolder1$ImageButton1"]').click();
      await expect(page).toHaveURL(`${process.env.BASE_URL}/alumnosnotas/Proteccion/Inicio.aspx`);
      await page.locator('[id="ctl00_AccordionPane2_header"]').click();
      await page.click('a[href="ReportPadres.aspx?Sel=3"]'); 
      const fila = await page.locator(`//table//tr[td[contains(text(), 'Base de Datos')]]`).first();
      await expect(fila).toBeVisible(); // Verifica que la fila exista
      await expect(fila.locator('td:nth-child(3)')).toHaveText('No cursada');   
    });
});

//Comprobar en la columna “condición” que la materia “Desarrollo multimedia” este no cursada
test.describe('Sistema alumnos 4', () => {
  test('Comprobar en la columna “condición” que la materia “Desarrollo multimedia” este no cursada', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/alumnosnotas/`);
    await expect(page).toHaveTitle(/Login Alumnos/);
    await page.locator('[name="ctl00$ContentPlaceHolder1$TextBox1"]').fill(process.env.USUARIO ?? '');
    await page.locator('[name="ctl00$ContentPlaceHolder1$Clave"]').fill(process.env.PASSWORD ?? '');
    await page.locator('[name="ctl00$ContentPlaceHolder1$ImageButton1"]').click();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/alumnosnotas/Proteccion/Inicio.aspx`);
    await page.locator('[id="ctl00_AccordionPane2_header"]').click();
    await page.click('a[href="ReportPadres.aspx?Sel=3"]'); 
    const materia = 'Desarrollo Multimedia';
    const fila = await page.locator(`//table//tr[td[contains(text(), '${materia}')]]`);
    await expect(fila).toBeVisible(); // Verifica que la fila exista
    await expect(fila.locator('td:nth-child(3)')).toHaveText('No cursada');   
  });
});
  