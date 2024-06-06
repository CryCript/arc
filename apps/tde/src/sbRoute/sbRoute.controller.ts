import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SbRouteService } from "./sbRoute.service";
import { SbRouteControllerBase } from "./base/sbRoute.controller.base";

@swagger.ApiTags("sbRoutes")
@common.Controller("sbRoutes")
export class SbRouteController extends SbRouteControllerBase {
  constructor(
    protected readonly service: SbRouteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
