import { Request, Response } from 'express';
import { ColunaService } from '../services/ColumnService';

export class ColumnController {
  async create(req: Request, res: Response) {

    const { name } = req.body

    const colunaService = new ColunaService();

    try {
      const newColuna = await colunaService.createColumn(name);
      return res.status(201).json(newColuna);
    } catch (err) {
      if (err instanceof Error) {
        return res
          .status(500).json({ error: err.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
  async listAll(req: Request, res: Response) {
    const colunaService = new ColunaService();

    try {
      const colunas = await colunaService.listAllColumns();
      return res.status(200).json(colunas);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}