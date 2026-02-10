export function transformProducts(products) {
  return products.map(p => ({
    name: p.name,
    url: p.url,
    price: Number(p.price),
    rating: p.rating ?? null,
    category: p.category ?? "unknown"
  }));
}
