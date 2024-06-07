import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SbEmployeeModuleBase } from "./base/sbEmployee.module.base";
import { SbEmployeeService } from "./sbEmployee.service";
import { SbEmployeeController } from "./sbEmployee.controller";
import { SbEmployeeResolver } from "./sbEmployee.resolver";

@Module({
  imports: [SbEmployeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SbEmployeeController],
  providers: [SbEmployeeService, SbEmployeeResolver],
  exports: [SbEmployeeService],
})
export class SbEmployeeModule {}
