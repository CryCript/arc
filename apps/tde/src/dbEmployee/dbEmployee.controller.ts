import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DbEmployeeService } from "./dbEmployee.service";
import { DbEmployeeControllerBase } from "./base/dbEmployee.controller.base";

@swagger.ApiTags("dbEmployees")
@common.Controller("dbEmployees")
export class DbEmployeeController extends DbEmployeeControllerBase {
  constructor(
    protected readonly service: DbEmployeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
