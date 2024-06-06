import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbProviderModuleBase } from "./base/sbProvider.module.base";
import { SbProviderService } from "./sbProvider.service";
import { SbProviderController } from "./sbProvider.controller";

@Module({
  imports: [SbProviderModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbProviderController],
  providers: [SbProviderService],
  exports: [SbProviderService],
})
export class SbProviderModule {}
