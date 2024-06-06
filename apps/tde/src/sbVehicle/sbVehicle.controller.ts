import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SbVehicleService } from "./sbVehicle.service";
import { SbVehicleControllerBase } from "./base/sbVehicle.controller.base";

@swagger.ApiTags("sbVehicles")
@common.Controller("sbVehicles")
export class SbVehicleController extends SbVehicleControllerBase {
  constructor(
    protected readonly service: SbVehicleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
