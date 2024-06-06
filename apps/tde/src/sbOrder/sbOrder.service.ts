import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SbOrderServiceBase } from "./base/sbOrder.service.base";

@Injectable()
export class SbOrderService extends SbOrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
