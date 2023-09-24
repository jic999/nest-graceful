import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SysPermissionController } from './sys-permission.controller'
import { SysPermissionService } from './sys-permission.service'
import { SysPermission } from '@/entity/sys-permission.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([SysPermission]),
  ],
  controllers: [SysPermissionController],
  providers: [SysPermissionService],
  exports: [SysPermissionService],
})
export class SysPermissionModule {}
