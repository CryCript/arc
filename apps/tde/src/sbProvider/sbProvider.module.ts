import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbProviderModuleBase } from "./base/sbProvider.module.base";
import { SbProviderService } from "./sbProvider.service";
import { SbProviderController } from "./sbProvider.controller";
import { SbProviderResolver } from "./sbProvider.resolver";

@Module({
  imports: [SbProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbProviderController],
  providers: [SbProviderService, SbProviderResolver],
  exports: [SbProviderService],
})
export class SbProviderModule {}
