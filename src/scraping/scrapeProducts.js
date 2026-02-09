import axios from "axios";

export async function scrapeProducts() {
  try {
    const response = await axios.get(
      "https://www.rarebeauty.com/products.json?limit=50",
      { timeout: 10000 }
    );

    const products = response.data.products.map((p) => ({
      name: p.title,
      handle: p.handle,
      url: `https://www.rarebeauty.com/products/${p.handle}`,
      price: p.variants[0]?.price ?? null
    }));

    return products;
  } catch (error) {
    console.error("Scraping failed:", error.message);
    return [];
  }
}
