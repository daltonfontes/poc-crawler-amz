import puppeteer from 'puppeteer';
import fs from 'fs/promises';

async function launchBrowser() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto('https://www.amazon.com.br/stores/BaggioCaf%C3%A9/P%C3%A1ginainicial/page/E1BAEC05-AA08-4E6C-9890-4F395DAACF59');

    await page.waitForSelector('#ProductGrid-drm038nje1 > div > div > div > div > ul');

    const items = await page.evaluate(() => {
      const itemsList = [];
      const itemList = document.querySelectorAll('#ProductGrid-drm038nje1 > div > div > div > div > ul > li');

      itemList.forEach(item => {
        const linkElement = item.querySelector('div:nth-child(1) > a');
        const titleElement = item.querySelector('div.ProductGridItem__itemInfoChild__hUHB0 > div.Title__truncateTitle__DGaow > a');
        const priceElement = item.querySelector('div.ProductGridItem__price__Um1nu > span.Price__price__LKpWT.Price__xlarge__EZT27.ProductGridItem__buyPrice__hNEg6.Price__fixedSize__jmsXS');

        if (titleElement && priceElement && linkElement) {
          const title = titleElement.textContent.trim();
          const price = priceElement.textContent.trim();
          const link = 'https://www.amazon.com.br' + linkElement.getAttribute('href').trim();
          itemsList.push({ title, price, link });
        }
      });

      return itemsList;
    });

    await saveToJson(items);

    return items;
  } finally {
    await browser.close();
  }
}

async function saveToJson(data) {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile('products.json', jsonData);
    console.log('Dados salvos em products.json');
  } catch (error) {
    console.error('Erro ao salvar dados em JSON:', error);
  }
}

async function printItemsAsJSON() {
  try {
    const items = await launchBrowser();
    console.log(JSON.stringify(items, null, 2));
    console.log('Navegação concluída');
  } catch (error) {
    console.error('Erro durante a navegação:', error);
  }
}

printItemsAsJSON();
