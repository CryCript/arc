import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DbEmployeeModuleBase } from "./base/dbEmployee.module.base";
import { DbEmployeeService } from "./dbEmployee.service";
import { DbEmployeeController } from "./dbEmployee.controller";
import { DbEmployeeResolver } from "./dbEmployee.resolver";

@Module({
  imports: [DbEmployeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DbEmployeeController],
  providers: [DbEmployeeService, DbEmployeeResolver],
  exports: [DbEmployeeService],
})
export class DbEmployeeModule {}
