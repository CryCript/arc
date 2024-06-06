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
  SbEmployee as PrismaSbEmployee,
  DbEmployee as PrismaDbEmployee,
  SbPickupPoint as PrismaSbPickupPoint,
  SbOrder as PrismaSbOrder,
  SbVehicle as PrismaSbVehicle,
} from "@prisma/client";

export class SbEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SbEmployeeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.sbEmployee.count(args);
  }

  async sbEmployees<T extends Prisma.SbEmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbEmployeeFindManyArgs>
  ): Promise<PrismaSbEmployee[]> {
    return this.prisma.sbEmployee.findMany<Prisma.SbEmployeeFindManyArgs>(args);
  }
  async sbEmployee<T extends Prisma.SbEmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbEmployeeFindUniqueArgs>
  ): Promise<PrismaSbEmployee | null> {
    return this.prisma.sbEmployee.findUnique(args);
  }
  async createSbEmployee<T extends Prisma.SbEmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbEmployeeCreateArgs>
  ): Promise<PrismaSbEmployee> {
    return this.prisma.sbEmployee.create<T>(args);
  }
  async updateSbEmployee<T extends Prisma.SbEmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbEmployeeUpdateArgs>
  ): Promise<PrismaSbEmployee> {
    return this.prisma.sbEmployee.update<T>(args);
  }
  async deleteSbEmployee<T extends Prisma.SbEmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SbEmployeeDeleteArgs>
  ): Promise<PrismaSbEmployee> {
    return this.prisma.sbEmployee.delete(args);
  }

  async getEmployee(parentId: string): Promise<PrismaDbEmployee | null> {
    return this.prisma.sbEmployee
      .findUnique({
        where: { id: parentId },
      })
      .employee();
  }

  async getPickupPoint(parentId: string): Promise<PrismaSbPickupPoint | null> {
    return this.prisma.sbEmployee
      .findUnique({
        where: { id: parentId },
      })
      .pickupPoint();
  }

  async getSbOrders(parentId: string): Promise<PrismaSbOrder | null> {
    return this.prisma.sbEmployee
      .findUnique({
        where: { id: parentId },
      })
      .sbOrders();
  }

  async getVehicleNoShift_1(parentId: string): Promise<PrismaSbVehicle | null> {
    return this.prisma.sbEmployee
      .findUnique({
        where: { id: parentId },
      })
      .vehicleNoShift_1();
  }

  async getVehicleNoShift_2(parentId: string): Promise<PrismaSbVehicle | null> {
    return this.prisma.sbEmployee
      .findUnique({
        where: { id: parentId },
      })
      .vehicleNoShift_2();
  }
}