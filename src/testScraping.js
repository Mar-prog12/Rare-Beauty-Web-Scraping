import { scrapeProducts } from "./scraping/scrapeProducts.js";
import { enrichProduct } from "./api/enrichProduct.js";


(async () => {
  const products = await scrapeProducts();
  const enriched = await enrichProduct(products[0]);
  console.log(enriched);
})();
