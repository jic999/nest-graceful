import { PickType } from '@nestjs/mapped-types'
import { IsNumber } from 'class-validator'
import { ValidatorClassBuilder } from 'src/common/dto/util'
import { SysUser } from 'src/entity/sys-user.entity'

export class CreateSysUserDto extends ValidatorClassBuilder(
  SysUser,
  ['username'],
  ['nickname', 'email'],
) {}

export class AssignRoleDto extends PickType(SysUser, ['id']) {
  @IsNumber({}, { each: true })
  roleIds: number[]
}
