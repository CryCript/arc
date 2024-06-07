import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SbRouteResolverBase } from "./base/sbRoute.resolver.base";
import { SbRoute } from "./base/SbRoute";
import { SbRouteService } from "./sbRoute.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SbRoute)
export class SbRouteResolver extends SbRouteResolverBase {
  constructor(
    protected readonly service: SbRouteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
