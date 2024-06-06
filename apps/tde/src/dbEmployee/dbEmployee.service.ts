import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DbEmployeeServiceBase } from "./base/dbEmployee.service.base";

@Injectable()
export class DbEmployeeService extends DbEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
