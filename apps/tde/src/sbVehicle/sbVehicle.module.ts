import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbVehicleModuleBase } from "./base/sbVehicle.module.base";
import { SbVehicleService } from "./sbVehicle.service";
import { SbVehicleController } from "./sbVehicle.controller";
import { SbVehicleResolver } from "./sbVehicle.resolver";

@Module({
  imports: [SbVehicleModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbVehicleController],
  providers: [SbVehicleService, SbVehicleResolver],
  exports: [SbVehicleService],
})
export class SbVehicleModule {}
