import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SbProviderServiceBase } from "./base/sbProvider.service.base";

@Injectable()
export class SbProviderService extends SbProviderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
