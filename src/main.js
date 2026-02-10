import { scrapeProducts } from "./scraping/scrapeProducts.js";
import { enrichProduct } from "./api/enrichProduct.js";
import { transformProducts } from "./processing/transform.js";
import { encrypt } from "./security/encrypt.js";
import { saveData } from "./storage/saveData.js";

async function run() {
  const scraped = await scrapeProducts();

  const enriched = [];
  for (const product of scraped.slice(0, 5)) {
    enriched.push(await enrichProduct(product));
  }

  const processed = transformProducts(enriched);

  const secured = processed.map(p => ({
    ...p,
    url: encrypt(p.url)
  }));

  saveData(secured);
  console.log("Pipeline completed successfully");
}

run();
