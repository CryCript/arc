import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DbCompanyModuleBase } from "./base/dbCompany.module.base";
import { DbCompanyService } from "./dbCompany.service";
import { DbCompanyController } from "./dbCompany.controller";

@Module({
  imports: [DbCompanyModuleBase, forwardRef(() => AuthModule)],
  controllers: [DbCompanyController],
  providers: [DbCompanyService],
  exports: [DbCompanyService],
})
export class DbCompanyModule {}
