/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Resident as PrismaResident,
  Payment as PrismaPayment,
  Unit as PrismaUnit,
} from "@prisma/client";

export class ResidentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ResidentCountArgs, "select">): Promise<number> {
    return this.prisma.resident.count(args);
  }

  async residents(
    args: Prisma.ResidentFindManyArgs
  ): Promise<PrismaResident[]> {
    return this.prisma.resident.findMany(args);
  }
  async resident(
    args: Prisma.ResidentFindUniqueArgs
  ): Promise<PrismaResident | null> {
    return this.prisma.resident.findUnique(args);
  }
  async createResident(
    args: Prisma.ResidentCreateArgs
  ): Promise<PrismaResident> {
    return this.prisma.resident.create(args);
  }
  async updateResident(
    args: Prisma.ResidentUpdateArgs
  ): Promise<PrismaResident> {
    return this.prisma.resident.update(args);
  }
  async deleteResident(
    args: Prisma.ResidentDeleteArgs
  ): Promise<PrismaResident> {
    return this.prisma.resident.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.resident
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getUnit(parentId: string): Promise<PrismaUnit | null> {
    return this.prisma.resident
      .findUnique({
        where: { id: parentId },
      })
      .unit();
  }
}
