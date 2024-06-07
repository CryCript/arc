/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DbCompanyService } from "../dbCompany.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DbCompanyCreateInput } from "./DbCompanyCreateInput";
import { DbCompany } from "./DbCompany";
import { DbCompanyFindManyArgs } from "./DbCompanyFindManyArgs";
import { DbCompanyWhereUniqueInput } from "./DbCompanyWhereUniqueInput";
import { DbCompanyUpdateInput } from "./DbCompanyUpdateInput";
import { DbEmployeeFindManyArgs } from "../../dbEmployee/base/DbEmployeeFindManyArgs";
import { DbEmployee } from "../../dbEmployee/base/DbEmployee";
import { DbEmployeeWhereUniqueInput } from "../../dbEmployee/base/DbEmployeeWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DbCompanyControllerBase {
  constructor(
    protected readonly service: DbCompanyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DbCompany })
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDbCompany(
    @common.Body() data: DbCompanyCreateInput
  ): Promise<DbCompany> {
    return await this.service.createDbCompany({
      data: data,
      select: {
        address: true,
        company: true,
        createdAt: true,
        email: true,
        id: true,
        telp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DbCompany] })
  @ApiNestedQuery(DbCompanyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dbCompanies(@common.Req() request: Request): Promise<DbCompany[]> {
    const args = plainToClass(DbCompanyFindManyArgs, request.query);
    return this.service.dbCompanies({
      ...args,
      select: {
        address: true,
        company: true,
        createdAt: true,
        email: true,
        id: true,
        telp: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DbCompany })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dbCompany(
    @common.Param() params: DbCompanyWhereUniqueInput
  ): Promise<DbCompany | null> {
    const result = await this.service.dbCompany({
      where: params,
      select: {
        address: true,
        company: true,
        createdAt: true,
        email: true,
        id: true,
        telp: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DbCompany })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDbCompany(
    @common.Param() params: DbCompanyWhereUniqueInput,
    @common.Body() data: DbCompanyUpdateInput
  ): Promise<DbCompany | null> {
    try {
      return await this.service.updateDbCompany({
        where: params,
        data: data,
        select: {
          address: true,
          company: true,
          createdAt: true,
          email: true,
          id: true,
          telp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DbCompany })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDbCompany(
    @common.Param() params: DbCompanyWhereUniqueInput
  ): Promise<DbCompany | null> {
    try {
      return await this.service.deleteDbCompany({
        where: params,
        select: {
          address: true,
          company: true,
          createdAt: true,
          email: true,
          id: true,
          telp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/dbEmployees")
  @ApiNestedQuery(DbEmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DbEmployee",
    action: "read",
    possession: "any",
  })
  async findDbEmployees(
    @common.Req() request: Request,
    @common.Param() params: DbCompanyWhereUniqueInput
  ): Promise<DbEmployee[]> {
    const query = plainToClass(DbEmployeeFindManyArgs, request.query);
    const results = await this.service.findDbEmployees(params.id, {
      ...query,
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        sbEmployees: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/dbEmployees")
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  async connectDbEmployees(
    @common.Param() params: DbCompanyWhereUniqueInput,
    @common.Body() body: DbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dbEmployees: {
        connect: body,
      },
    };
    await this.service.updateDbCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/dbEmployees")
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  async updateDbEmployees(
    @common.Param() params: DbCompanyWhereUniqueInput,
    @common.Body() body: DbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dbEmployees: {
        set: body,
      },
    };
    await this.service.updateDbCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/dbEmployees")
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  async disconnectDbEmployees(
    @common.Param() params: DbCompanyWhereUniqueInput,
    @common.Body() body: DbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      dbEmployees: {
        disconnect: body,
      },
    };
    await this.service.updateDbCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/users")
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async findUsers(
    @common.Req() request: Request,
    @common.Param() params: DbCompanyWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUsers(params.id, {
      ...query,
      select: {
        companyId: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  async connectUsers(
    @common.Param() params: DbCompanyWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        connect: body,
      },
    };
    await this.service.updateDbCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  async updateUsers(
    @common.Param() params: DbCompanyWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        set: body,
      },
    };
    await this.service.updateDbCompany({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/users")
  @nestAccessControl.UseRoles({
    resource: "DbCompany",
    action: "update",
    possession: "any",
  })
  async disconnectUsers(
    @common.Param() params: DbCompanyWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      users: {
        disconnect: body,
      },
    };
    await this.service.updateDbCompany({
      where: params,
      data,
      select: { id: true },
    });
  }
}
