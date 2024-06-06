import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SbRouteServiceBase } from "./base/sbRoute.service.base";

@Injectable()
export class SbRouteService extends SbRouteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
