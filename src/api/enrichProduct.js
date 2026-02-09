import axios from "axios";

export async function enrichProduct(product) {
  try {
    const response = await axios.get("https://dummyjson.com/products/1");

    return {
      ...product,
      rating: response.data.rating,
      category: response.data.category
    };
  } catch (error) {
    console.error("API enrichment failed:", error.message);
    return product;
  }
}
