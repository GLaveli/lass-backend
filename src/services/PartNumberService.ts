// PartNumberService.ts
import { prismaClient } from '../database/prismaClient';

export class PartNumberService {
  async createPartNumber(partnumber: string, description: string, lineId: number) {
    return prismaClient.partNumber.create({
      data: {
        partnumber,
        description,
        lineId,
      },
    });
  }

  async findPartNumberWithLineAndColumn(partnumber: string) {
    return prismaClient.partNumber.findUnique({
      where: {
        partnumber: partnumber
      },
      include: {
        line: {
          include: {
            column: true
          }
        }
      }
    });
  }

  async listAllPartNumbers() {
    return prismaClient.partNumber.findMany({});
  }

  async updatePartNumber(id: number, partnumber: string, description: string, lineId: number) {
    return prismaClient.partNumber.update({
      where: { id },
      data: { partnumber, description, lineId },
    });
  }

  async deletePartNumber(id: number) {
    return prismaClient.partNumber.delete({
      where: { id },
    });
  }
}
