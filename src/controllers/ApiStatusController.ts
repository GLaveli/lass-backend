import { Request, Response } from "express"

export class ApiStatusController {
  async showStatus(req: Request, res: Response) {
    const apiTime = new Date().toLocaleString("pt-BR", { timeZone: "" })
    return res.json({ Api: `Api online em: ${apiTime}` });
  };
};