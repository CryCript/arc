import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SbPickupPointResolverBase } from "./base/sbPickupPoint.resolver.base";
import { SbPickupPoint } from "./base/SbPickupPoint";
import { SbPickupPointService } from "./sbPickupPoint.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SbPickupPoint)
export class SbPickupPointResolver extends SbPickupPointResolverBase {
  constructor(
    protected readonly service: SbPickupPointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
