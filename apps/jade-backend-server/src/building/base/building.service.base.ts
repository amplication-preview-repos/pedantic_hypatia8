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
  Building as PrismaBuilding,
  Unit as PrismaUnit,
} from "@prisma/client";

export class BuildingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BuildingCountArgs, "select">): Promise<number> {
    return this.prisma.building.count(args);
  }

  async buildings(
    args: Prisma.BuildingFindManyArgs
  ): Promise<PrismaBuilding[]> {
    return this.prisma.building.findMany(args);
  }
  async building(
    args: Prisma.BuildingFindUniqueArgs
  ): Promise<PrismaBuilding | null> {
    return this.prisma.building.findUnique(args);
  }
  async createBuilding(
    args: Prisma.BuildingCreateArgs
  ): Promise<PrismaBuilding> {
    return this.prisma.building.create(args);
  }
  async updateBuilding(
    args: Prisma.BuildingUpdateArgs
  ): Promise<PrismaBuilding> {
    return this.prisma.building.update(args);
  }
  async deleteBuilding(
    args: Prisma.BuildingDeleteArgs
  ): Promise<PrismaBuilding> {
    return this.prisma.building.delete(args);
  }

  async findUnits(
    parentId: string,
    args: Prisma.UnitFindManyArgs
  ): Promise<PrismaUnit[]> {
    return this.prisma.building
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .units(args);
  }
}
