import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SysUser } from 'src/entity/sys-user.entity'
import { SysUserController } from './sys-user.controller'
import { SysUserService } from './sys-user.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([SysUser]),
  ],
  controllers: [SysUserController],
  providers: [SysUserService],
  exports: [SysUserService],
})
export class SysUserModule {}
