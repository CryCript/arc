import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SbPickupPointServiceBase } from "./base/sbPickupPoint.service.base";

@Injectable()
export class SbPickupPointService extends SbPickupPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
