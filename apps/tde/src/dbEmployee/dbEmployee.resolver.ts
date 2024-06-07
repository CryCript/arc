import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DbEmployeeResolverBase } from "./base/dbEmployee.resolver.base";
import { DbEmployee } from "./base/DbEmployee";
import { DbEmployeeService } from "./dbEmployee.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DbEmployee)
export class DbEmployeeResolver extends DbEmployeeResolverBase {
  constructor(
    protected readonly service: DbEmployeeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
