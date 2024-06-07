import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbPickupPointModuleBase } from "./base/sbPickupPoint.module.base";
import { SbPickupPointService } from "./sbPickupPoint.service";
import { SbPickupPointController } from "./sbPickupPoint.controller";
import { SbPickupPointResolver } from "./sbPickupPoint.resolver";

@Module({
  imports: [SbPickupPointModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbPickupPointController],
  providers: [SbPickupPointService, SbPickupPointResolver],
  exports: [SbPickupPointService],
})
export class SbPickupPointModule {}
