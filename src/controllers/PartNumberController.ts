// PartNumberController.ts
import { Request, Response } from 'express';
import { PartNumberService } from '../services/PartNumberService';

export class PartNumberController {
  async create(req: Request, res: Response) {
    const { partnumber, description, lineId } = req.body;

    const partNumberService = new PartNumberService();

    try {
      const newPartNumber = await partNumberService.createPartNumber(partnumber, description, lineId);
      return res.status(201).json(newPartNumber);
    } catch (err) {
      return res.json({ err })
    }
  }

  async listAll(req: Request, res: Response) {
    const partNumberService = new PartNumberService();

    try {
      const partNumbers = await partNumberService.listAllPartNumbers();
      return res.status(200).json(partNumbers);
    } catch (err) {
      // ... Tratamento de erro ...
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { partnumber, description, lineId } = req.body;

    const partNumberService = new PartNumberService();

    try {
      const updatedPartNumber = await partNumberService.updatePartNumber(parseInt(id), partnumber, description, lineId);
      return res.status(200).json(updatedPartNumber);
    } catch (err) {
      // ... Tratamento de erro ...
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const partNumberService = new PartNumberService();

    try {
      await partNumberService.deletePartNumber(parseInt(id));
      return res.status(204).send();
    } catch (err) {
      // ... Tratamento de erro ...
    }
  }

  async getPartNumberWithLineAndColumn(req: Request, res: Response) {
    const { partnumber } = req.params;

    const partNumberService = new PartNumberService();

    try {
      const partNumberData = await partNumberService.findPartNumberWithLineAndColumn(partnumber);
      if (partNumberData) {
        return res.status(200).json(partNumberData);
      } else {
        return res.status(404).json({ message: 'PartNumber not found' });
      }
    } catch (err) {
      if (err instanceof Error) {
        return res.status(500).json({ error: err.message });
      } else {
        return res.status(500).json({ error: 'An unknown error occurred' });
      }
    }
  }
}

