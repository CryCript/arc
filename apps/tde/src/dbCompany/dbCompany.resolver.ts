import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DbCompanyResolverBase } from "./base/dbCompany.resolver.base";
import { DbCompany } from "./base/DbCompany";
import { DbCompanyService } from "./dbCompany.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DbCompany)
export class DbCompanyResolver extends DbCompanyResolverBase {
  constructor(
    protected readonly service: DbCompanyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
