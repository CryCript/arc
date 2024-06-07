import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbRouteModuleBase } from "./base/sbRoute.module.base";
import { SbRouteService } from "./sbRoute.service";
import { SbRouteController } from "./sbRoute.controller";
import { SbRouteResolver } from "./sbRoute.resolver";

@Module({
  imports: [SbRouteModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbRouteController],
  providers: [SbRouteService, SbRouteResolver],
  exports: [SbRouteService],
})
export class SbRouteModule {}
