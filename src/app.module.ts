import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { RouterModule } from '@nestjs/core'
import { AuthModule } from './auth'
import { configuration } from './config'
import { UserModule } from './user'
import { routes } from './routes'
import { adminModules } from './admin'

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
  providers: [],
})
export class AppModule {}
