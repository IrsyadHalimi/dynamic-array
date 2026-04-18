/**
 * Menggabungkan 3 array menjadi satu array string kalimat.
 * Logika dinamis: Menggunakan modulo agar array yang lebih pendek melingkar (loop).
 */
export const manipulateInventoryArray = (
  colors: string[],
  items: string[],
  promos: string[]
): string[] => {
  // Tentukan panjang maksimal sebagai acuan iterasi
  const maxLength = Math.max(colors.length, items.length, promos.length);
  const result: string[] = [];

  for (let i = 0; i < maxLength; i++) {
    // Ambil elemen dengan modulo untuk menangani perbedaan panjang array
    const item = items[i % items.length];
    const color = colors[i % colors.length];
    const promo = promos[i % promos.length];

    // Formating agar huruf pertama kapital (Baju Merah Diskon)
    const format = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    result.push(`${format(item)} ${format(color)} ${format(promo)}`);
  }

  return result;
};