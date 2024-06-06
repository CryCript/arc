import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SbPickupPointService } from "./sbPickupPoint.service";
import { SbPickupPointControllerBase } from "./base/sbPickupPoint.controller.base";

@swagger.ApiTags("sbPickupPoints")
@common.Controller("sbPickupPoints")
export class SbPickupPointController extends SbPickupPointControllerBase {
  constructor(
    protected readonly service: SbPickupPointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
