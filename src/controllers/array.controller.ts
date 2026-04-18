import { Request, Response } from 'express';
import { manipulateInventoryArray } from '../services/array.service';

export const processArrayRequest = (req: Request, res: Response) => {
  // Data sesuai soal
  const colors = ["merah", "kuning", "hijau", "pink", "ungu"];
  const items = ["baju", "celana", "topi", "jaket", "sepatu"];
  const promos = ["Diskon", "Sale", "Diskon", "Sale", "Sale"];

  // Simulasi kondisi dinamis: jika ada query ?extra=true, tambahkan 'maroon'
  if (req.query.extra === 'true') {
    colors.push("maroon");
  }

  const result = manipulateInventoryArray(colors, items, promos);
  
  return res.status(200).json({
    status: 'success',
    data: result
  });
};