import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbRouteModuleBase } from "./base/sbRoute.module.base";
import { SbRouteService } from "./sbRoute.service";
import { SbRouteController } from "./sbRoute.controller";

@Module({
  imports: [SbRouteModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbRouteController],
  providers: [SbRouteService],
  exports: [SbRouteService],
})
export class SbRouteModule {}
