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
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { SbVehicleService } from "../sbVehicle.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SbVehicleCreateInput } from "./SbVehicleCreateInput";
import { SbVehicle } from "./SbVehicle";
import { SbVehicleFindManyArgs } from "./SbVehicleFindManyArgs";
import { SbVehicleWhereUniqueInput } from "./SbVehicleWhereUniqueInput";
import { SbVehicleUpdateInput } from "./SbVehicleUpdateInput";
import { SbEmployeeFindManyArgs } from "../../sbEmployee/base/SbEmployeeFindManyArgs";
import { SbEmployee } from "../../sbEmployee/base/SbEmployee";
import { SbEmployeeWhereUniqueInput } from "../../sbEmployee/base/SbEmployeeWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class SbVehicleControllerBase {
  constructor(
    protected readonly service: SbVehicleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SbVehicle })
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createSbVehicle(
    @common.Body() data: SbVehicleCreateInput
  ): Promise<SbVehicle> {
    return await this.service.createSbVehicle({
      data: {
        ...data,

        providerId: data.providerId
          ? {
              connect: data.providerId,
            }
          : undefined,

        routeId: data.routeId
          ? {
              connect: data.routeId,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        driver: true,
        driverPhoto: true,
        email: true,
        id: true,
        noPol: true,
        noUnit: true,
        phoneNo: true,

        providerId: {
          select: {
            id: true,
          },
        },

        routeId: {
          select: {
            id: true,
          },
        },

        shift: true,
        updatedAt: true,
        vehiclePhoto: true,
        vehicleType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [SbVehicle] })
  @ApiNestedQuery(SbVehicleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sbVehicles(@common.Req() request: Request): Promise<SbVehicle[]> {
    const args = plainToClass(SbVehicleFindManyArgs, request.query);
    return this.service.sbVehicles({
      ...args,
      select: {
        createdAt: true,
        driver: true,
        driverPhoto: true,
        email: true,
        id: true,
        noPol: true,
        noUnit: true,
        phoneNo: true,

        providerId: {
          select: {
            id: true,
          },
        },

        routeId: {
          select: {
            id: true,
          },
        },

        shift: true,
        updatedAt: true,
        vehiclePhoto: true,
        vehicleType: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SbVehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async sbVehicle(
    @common.Param() params: SbVehicleWhereUniqueInput
  ): Promise<SbVehicle | null> {
    const result = await this.service.sbVehicle({
      where: params,
      select: {
        createdAt: true,
        driver: true,
        driverPhoto: true,
        email: true,
        id: true,
        noPol: true,
        noUnit: true,
        phoneNo: true,

        providerId: {
          select: {
            id: true,
          },
        },

        routeId: {
          select: {
            id: true,
          },
        },

        shift: true,
        updatedAt: true,
        vehiclePhoto: true,
        vehicleType: true,
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
  @swagger.ApiOkResponse({ type: SbVehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateSbVehicle(
    @common.Param() params: SbVehicleWhereUniqueInput,
    @common.Body() data: SbVehicleUpdateInput
  ): Promise<SbVehicle | null> {
    try {
      return await this.service.updateSbVehicle({
        where: params,
        data: {
          ...data,

          providerId: data.providerId
            ? {
                connect: data.providerId,
              }
            : undefined,

          routeId: data.routeId
            ? {
                connect: data.routeId,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          driver: true,
          driverPhoto: true,
          email: true,
          id: true,
          noPol: true,
          noUnit: true,
          phoneNo: true,

          providerId: {
            select: {
              id: true,
            },
          },

          routeId: {
            select: {
              id: true,
            },
          },

          shift: true,
          updatedAt: true,
          vehiclePhoto: true,
          vehicleType: true,
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
  @swagger.ApiOkResponse({ type: SbVehicle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteSbVehicle(
    @common.Param() params: SbVehicleWhereUniqueInput
  ): Promise<SbVehicle | null> {
    try {
      return await this.service.deleteSbVehicle({
        where: params,
        select: {
          createdAt: true,
          driver: true,
          driverPhoto: true,
          email: true,
          id: true,
          noPol: true,
          noUnit: true,
          phoneNo: true,

          providerId: {
            select: {
              id: true,
            },
          },

          routeId: {
            select: {
              id: true,
            },
          },

          shift: true,
          updatedAt: true,
          vehiclePhoto: true,
          vehicleType: true,
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

  @common.Put(":id/driverPhoto")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: SbVehicle,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadDriverPhoto(
    @common.Param()
    params: SbVehicleWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<SbVehicle> {
    return this.service.uploadDriverPhoto(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/driverPhoto")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadDriverPhoto(
    @common.Param()
    params: SbVehicleWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadDriverPhoto({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/driverPhoto")
  @swagger.ApiOkResponse({
    type: SbVehicle,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteDriverPhoto(
    @common.Param()
    params: SbVehicleWhereUniqueInput
  ): Promise<SbVehicle> {
    return this.service.deleteDriverPhoto({
      where: params,
    });
  }

  @common.Put(":id/vehiclePhoto")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: SbVehicle,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadVehiclePhoto(
    @common.Param()
    params: SbVehicleWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<SbVehicle> {
    return this.service.uploadVehiclePhoto(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/vehiclePhoto")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadVehiclePhoto(
    @common.Param()
    params: SbVehicleWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadVehiclePhoto({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/vehiclePhoto")
  @swagger.ApiOkResponse({
    type: SbVehicle,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteVehiclePhoto(
    @common.Param()
    params: SbVehicleWhereUniqueInput
  ): Promise<SbVehicle> {
    return this.service.deleteVehiclePhoto({
      where: params,
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sbEmployee")
  @ApiNestedQuery(SbEmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SbEmployee",
    action: "read",
    possession: "any",
  })
  async findSbEmployee(
    @common.Req() request: Request,
    @common.Param() params: SbVehicleWhereUniqueInput
  ): Promise<SbEmployee[]> {
    const query = plainToClass(SbEmployeeFindManyArgs, request.query);
    const results = await this.service.findSbEmployee(params.id, {
      ...query,
      select: {
        createdAt: true,

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,

        pickupPointId: {
          select: {
            id: true,
          },
        },

        shift_1UnitId: {
          select: {
            id: true,
          },
        },

        shift_2UnitId: {
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

  @common.Post("/:id/sbEmployee")
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "update",
    possession: "any",
  })
  async connectSbEmployee(
    @common.Param() params: SbVehicleWhereUniqueInput,
    @common.Body() body: SbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sbEmployee: {
        connect: body,
      },
    };
    await this.service.updateSbVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sbEmployee")
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "update",
    possession: "any",
  })
  async updateSbEmployee(
    @common.Param() params: SbVehicleWhereUniqueInput,
    @common.Body() body: SbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sbEmployee: {
        set: body,
      },
    };
    await this.service.updateSbVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sbEmployee")
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "update",
    possession: "any",
  })
  async disconnectSbEmployee(
    @common.Param() params: SbVehicleWhereUniqueInput,
    @common.Body() body: SbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sbEmployee: {
        disconnect: body,
      },
    };
    await this.service.updateSbVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/sbEmployees")
  @ApiNestedQuery(SbEmployeeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "SbEmployee",
    action: "read",
    possession: "any",
  })
  async findSbEmployees(
    @common.Req() request: Request,
    @common.Param() params: SbVehicleWhereUniqueInput
  ): Promise<SbEmployee[]> {
    const query = plainToClass(SbEmployeeFindManyArgs, request.query);
    const results = await this.service.findSbEmployees(params.id, {
      ...query,
      select: {
        createdAt: true,

        employeeId: {
          select: {
            id: true,
          },
        },

        id: true,

        pickupPointId: {
          select: {
            id: true,
          },
        },

        shift_1UnitId: {
          select: {
            id: true,
          },
        },

        shift_2UnitId: {
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

  @common.Post("/:id/sbEmployees")
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "update",
    possession: "any",
  })
  async connectSbEmployees(
    @common.Param() params: SbVehicleWhereUniqueInput,
    @common.Body() body: SbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sbEmployees: {
        connect: body,
      },
    };
    await this.service.updateSbVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/sbEmployees")
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "update",
    possession: "any",
  })
  async updateSbEmployees(
    @common.Param() params: SbVehicleWhereUniqueInput,
    @common.Body() body: SbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sbEmployees: {
        set: body,
      },
    };
    await this.service.updateSbVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/sbEmployees")
  @nestAccessControl.UseRoles({
    resource: "SbVehicle",
    action: "update",
    possession: "any",
  })
  async disconnectSbEmployees(
    @common.Param() params: SbVehicleWhereUniqueInput,
    @common.Body() body: SbEmployeeWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      sbEmployees: {
        disconnect: body,
      },
    };
    await this.service.updateSbVehicle({
      where: params,
      data,
      select: { id: true },
    });
  }
}
