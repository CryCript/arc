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
  SbPickupPoint as PrismaSbPickupPoint,
  SbEmployee as PrismaSbEmployee,
  SbRoute as PrismaSbRoute,
} from "@prisma/client";

export class SbPickupPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SbPickupPointCountArgs, "select">
  ): Promise<number> {
    return this.prisma.sbPickupPoint.count(args);
  }

  async sbPickupPoints<T extends Prisma.SbPickupPointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbPickupPointFindManyArgs>
  ): Promise<PrismaSbPickupPoint[]> {
    return this.prisma.sbPickupPoint.findMany<Prisma.SbPickupPointFindManyArgs>(
      args
    );
  }
  async sbPickupPoint<T extends Prisma.SbPickupPointFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbPickupPointFindUniqueArgs>
  ): Promise<PrismaSbPickupPoint | null> {
    return this.prisma.sbPickupPoint.findUnique(args);
  }
  async createSbPickupPoint<T extends Prisma.SbPickupPointCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbPickupPointCreateArgs>
  ): Promise<PrismaSbPickupPoint> {
    return this.prisma.sbPickupPoint.create<T>(args);
  }
  async updateSbPickupPoint<T extends Prisma.SbPickupPointUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbPickupPointUpdateArgs>
  ): Promise<PrismaSbPickupPoint> {
    return this.prisma.sbPickupPoint.update<T>(args);
  }
  async deleteSbPickupPoint<T extends Prisma.SbPickupPointDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbPickupPointDeleteArgs>
  ): Promise<PrismaSbPickupPoint> {
    return this.prisma.sbPickupPoint.delete(args);
  }

  async findSbEmployees(
    parentId: string,
    args: Prisma.SbEmployeeFindManyArgs
  ): Promise<PrismaSbEmployee[]> {
    return this.prisma.sbPickupPoint
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .sbEmployees(args);
  }

  async getRoute(parentId: string): Promise<PrismaSbRoute | null> {
    return this.prisma.sbPickupPoint
      .findUnique({
        where: { id: parentId },
      })
      .route();
  }
}
