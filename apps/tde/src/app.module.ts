import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { DbCompanyModule } from "./dbCompany/dbCompany.module";
import { DbEmployeeModule } from "./dbEmployee/dbEmployee.module";
import { SbEmployeeModule } from "./sbEmployee/sbEmployee.module";
import { SbRouteModule } from "./sbRoute/sbRoute.module";
import { SbPickupPointModule } from "./sbPickupPoint/sbPickupPoint.module";
import { SbProviderModule } from "./sbProvider/sbProvider.module";
import { SbVehicleModule } from "./sbVehicle/sbVehicle.module";
import { SbOrderModule } from "./sbOrder/sbOrder.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

import { LoggerModule } from "./logger/logger.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    LoggerModule,
    ACLModule,
    AuthModule,
    UserModule,
    DbCompanyModule,
    DbEmployeeModule,
    SbEmployeeModule,
    SbRouteModule,
    SbPickupPointModule,
    SbProviderModule,
    SbVehicleModule,
    SbOrderModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
