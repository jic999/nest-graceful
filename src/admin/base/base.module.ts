import { Module } from '@nestjs/common'
import { AuthModule } from 'src/auth'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SysUser } from 'src/entity/sys-user.entity'
import { UserModule } from 'src/user'
import { AdminBaseController } from './base.controller'

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([SysUser]),
    UserModule,
  ],
  controllers: [AdminBaseController],
})
export class AdminBaseModule {}
