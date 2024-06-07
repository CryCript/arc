import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SbVehicleResolverBase } from "./base/sbVehicle.resolver.base";
import { SbVehicle } from "./base/SbVehicle";
import { SbVehicleService } from "./sbVehicle.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SbVehicle)
export class SbVehicleResolver extends SbVehicleResolverBase {
  constructor(
    protected readonly service: SbVehicleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
