// Device mockups live in src/assets/products and are referenced from content by file name.
const MEDIA = import.meta.glob<string>("../../assets/products/*.{webp,png,jpg}", {
  eager: true,
  import: "default",
});

export function productMedia(file?: string): string | undefined {
  if (!file) return undefined;
  return MEDIA[`../../assets/products/${file}`];
}
