import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DbCompanyService } from "./dbCompany.service";
import { DbCompanyControllerBase } from "./base/dbCompany.controller.base";

@swagger.ApiTags("dbCompanies")
@common.Controller("dbCompanies")
export class DbCompanyController extends DbCompanyControllerBase {
  constructor(
    protected readonly service: DbCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
