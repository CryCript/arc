import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SbEmployeeService } from "./sbEmployee.service";
import { SbEmployeeControllerBase } from "./base/sbEmployee.controller.base";

@swagger.ApiTags("sbEmployees")
@common.Controller("sbEmployees")
export class SbEmployeeController extends SbEmployeeControllerBase {
  constructor(
    protected readonly service: SbEmployeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
