/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { SbOrder } from "./SbOrder";
import { SbOrderCountArgs } from "./SbOrderCountArgs";
import { SbOrderFindManyArgs } from "./SbOrderFindManyArgs";
import { SbOrderFindUniqueArgs } from "./SbOrderFindUniqueArgs";
import { CreateSbOrderArgs } from "./CreateSbOrderArgs";
import { UpdateSbOrderArgs } from "./UpdateSbOrderArgs";
import { DeleteSbOrderArgs } from "./DeleteSbOrderArgs";
import { SbEmployee } from "../../sbEmployee/base/SbEmployee";
import { SbOrderService } from "../sbOrder.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SbOrder)
export class SbOrderResolverBase {
  constructor(
    protected readonly service: SbOrderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SbOrder",
    action: "read",
    possession: "any",
  })
  async _sbOrdersMeta(
    @graphql.Args() args: SbOrderCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SbOrder])
  @nestAccessControl.UseRoles({
    resource: "SbOrder",
    action: "read",
    possession: "any",
  })
  async sbOrders(
    @graphql.Args() args: SbOrderFindManyArgs
  ): Promise<SbOrder[]> {
    return this.service.sbOrders(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SbOrder, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SbOrder",
    action: "read",
    possession: "own",
  })
  async sbOrder(
    @graphql.Args() args: SbOrderFindUniqueArgs
  ): Promise<SbOrder | null> {
    const result = await this.service.sbOrder(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SbOrder)
  @nestAccessControl.UseRoles({
    resource: "SbOrder",
    action: "create",
    possession: "any",
  })
  async createSbOrder(
    @graphql.Args() args: CreateSbOrderArgs
  ): Promise<SbOrder> {
    return await this.service.createSbOrder({
      ...args,
      data: {
        ...args.data,

        employeeId: args.data.employeeId
          ? {
              connect: args.data.employeeId,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SbOrder)
  @nestAccessControl.UseRoles({
    resource: "SbOrder",
    action: "update",
    possession: "any",
  })
  async updateSbOrder(
    @graphql.Args() args: UpdateSbOrderArgs
  ): Promise<SbOrder | null> {
    try {
      return await this.service.updateSbOrder({
        ...args,
        data: {
          ...args.data,

          employeeId: args.data.employeeId
            ? {
                connect: args.data.employeeId,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SbOrder)
  @nestAccessControl.UseRoles({
    resource: "SbOrder",
    action: "delete",
    possession: "any",
  })
  async deleteSbOrder(
    @graphql.Args() args: DeleteSbOrderArgs
  ): Promise<SbOrder | null> {
    try {
      return await this.service.deleteSbOrder(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => SbEmployee, {
    nullable: true,
    name: "employeeId",
  })
  @nestAccessControl.UseRoles({
    resource: "SbEmployee",
    action: "read",
    possession: "any",
  })
  async getEmployeeId(
    @graphql.Parent() parent: SbOrder
  ): Promise<SbEmployee | null> {
    const result = await this.service.getEmployeeId(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}