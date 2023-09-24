import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { APP_GUARD, RouterModule } from '@nestjs/core'
import { AuthModule } from './auth'
import { configuration } from './config'
import { UserModule } from './user'
import { routes } from './routes'
import { adminModules } from './admin'
import { PermissionGuard } from './common/guards/permission.guard'

@Module({
  imports: [
    RouterModule.register(routes),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        ...config.get<TypeOrmModuleOptions>('db'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    ...adminModules,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule {}
