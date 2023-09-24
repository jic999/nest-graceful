import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SysUser } from 'src/entity/sys-user.entity'
import { SysUserController } from './sys-user.controller'
import { SysUserService } from './sys-user.service'
import { SysRole } from '@/entity/sys-role.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([SysUser, SysRole]),
  ],
  controllers: [SysUserController],
  providers: [SysUserService],
  exports: [SysUserService],
})
export class SysUserModule {}
