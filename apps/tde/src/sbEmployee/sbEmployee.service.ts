import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SbEmployeeServiceBase } from "./base/sbEmployee.service.base";

@Injectable()
export class SbEmployeeService extends SbEmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
