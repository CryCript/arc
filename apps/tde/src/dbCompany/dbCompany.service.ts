import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DbCompanyServiceBase } from "./base/dbCompany.service.base";

@Injectable()
export class DbCompanyService extends DbCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
