import { prismaClient } from '../database/prismaClient';

export class LineService {
  async createLine(name: string, columnId: number) {
    return prismaClient.line.create({
      data: {
        name,
        columnId,
      }
    });
  }

  async listAllLines() {
    return prismaClient.line.findMany({});
  }

}
