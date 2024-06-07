import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SbEmployeeResolverBase } from "./base/sbEmployee.resolver.base";
import { SbEmployee } from "./base/SbEmployee";
import { SbEmployeeService } from "./sbEmployee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SbEmployee)
export class SbEmployeeResolver extends SbEmployeeResolverBase {
  constructor(
    protected readonly service: SbEmployeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
