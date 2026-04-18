import { manipulateInventoryArray } from '../src/services/array.service';

describe('Soal 6: Dynamic Array Manipulation', () => {
  
  test('Harus menggabungkan array dengan benar (Skenario Dasar - 5 Data)', () => {
    const colors = ["merah", "kuning", "hijau", "pink", "ungu"];
    const items = ["baju", "celana", "topi", "jaket", "sepatu"];
    const promos = ["Diskon", "Sale", "Diskon", "Sale", "Sale"];

    const result = manipulateInventoryArray(colors, items, promos);

    expect(result).toHaveLength(5);
    expect(result[0]).toBe("Baju Merah Diskon");
    expect(result[4]).toBe("Sepatu Ungu Sale");
  });

  test('Harus melakukan looping (Modulo) jika ada tambahan warna Maroon (6 Data)', () => {
    const colors = ["merah", "kuning", "hijau", "pink", "ungu", "maroon"];
    const items = ["baju", "celana", "topi", "jaket", "sepatu"];
    const promos = ["Diskon", "Sale", "Diskon", "Sale", "Sale"];

    const result = manipulateInventoryArray(colors, items, promos);

    // Data ke-6 harus mengambil item pertama (Baju) dan promo pertama (Diskon)
    expect(result).toHaveLength(6);
    expect(result[5]).toBe("Baju Maroon Diskon");
  });

});