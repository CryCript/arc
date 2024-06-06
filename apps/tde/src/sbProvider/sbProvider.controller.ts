import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SbProviderService } from "./sbProvider.service";
import { SbProviderControllerBase } from "./base/sbProvider.controller.base";

@swagger.ApiTags("sbProviders")
@common.Controller("sbProviders")
export class SbProviderController extends SbProviderControllerBase {
  constructor(
    protected readonly service: SbProviderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
