import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbOrderModuleBase } from "./base/sbOrder.module.base";
import { SbOrderService } from "./sbOrder.service";
import { SbOrderController } from "./sbOrder.controller";

@Module({
  imports: [SbOrderModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbOrderController],
  providers: [SbOrderService],
  exports: [SbOrderService],
})
export class SbOrderModule {}
