import { Request, Response } from 'express';
import { LineService } from '../services/LineService';

export class LineController {
  async create(req: Request, res: Response) {
    const { name, columnId } = req.body;

    const lineService = new LineService();

    try {
      const newRow = await lineService.createLine(name, columnId);
      return res.status(201).json(newRow);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }

  async listAll(req: Request, res: Response) {
    const lineService = new LineService();

    try {
      const rows = await lineService.listAllLines();
      return res.status(200).json(rows);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}
