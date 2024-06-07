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
  DbEmployee as PrismaDbEmployee,
  DbCompany as PrismaDbCompany,
  SbEmployee as PrismaSbEmployee,
} from "@prisma/client";

export class DbEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DbEmployeeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.dbEmployee.count(args);
  }

  async dbEmployees<T extends Prisma.DbEmployeeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DbEmployeeFindManyArgs>
  ): Promise<PrismaDbEmployee[]> {
    return this.prisma.dbEmployee.findMany<Prisma.DbEmployeeFindManyArgs>(args);
  }
  async dbEmployee<T extends Prisma.DbEmployeeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DbEmployeeFindUniqueArgs>
  ): Promise<PrismaDbEmployee | null> {
    return this.prisma.dbEmployee.findUnique(args);
  }
  async createDbEmployee<T extends Prisma.DbEmployeeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DbEmployeeCreateArgs>
  ): Promise<PrismaDbEmployee> {
    return this.prisma.dbEmployee.create<T>(args);
  }
  async updateDbEmployee<T extends Prisma.DbEmployeeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DbEmployeeUpdateArgs>
  ): Promise<PrismaDbEmployee> {
    return this.prisma.dbEmployee.update<T>(args);
  }
  async deleteDbEmployee<T extends Prisma.DbEmployeeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DbEmployeeDeleteArgs>
  ): Promise<PrismaDbEmployee> {
    return this.prisma.dbEmployee.delete(args);
  }

  async getCompanyId(parentId: string): Promise<PrismaDbCompany | null> {
    return this.prisma.dbEmployee
      .findUnique({
        where: { id: parentId },
      })
      .companyId();
  }

  async getSbEmployees(parentId: string): Promise<PrismaSbEmployee | null> {
    return this.prisma.dbEmployee
      .findUnique({
        where: { id: parentId },
      })
      .sbEmployees();
  }
}
