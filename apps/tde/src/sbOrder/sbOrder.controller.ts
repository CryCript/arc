import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SbOrderService } from "./sbOrder.service";
import { SbOrderControllerBase } from "./base/sbOrder.controller.base";

@swagger.ApiTags("sbOrders")
@common.Controller("sbOrders")
export class SbOrderController extends SbOrderControllerBase {
  constructor(
    protected readonly service: SbOrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
