import { prismaClient } from '../database/prismaClient';

export class ColunaService {
  async createColumn(name: string) {
    return prismaClient.column.create({
      data: {
        name
      }
    });
  }

  async listAllColumns() {
    return prismaClient.column.findMany({});
  }
}
