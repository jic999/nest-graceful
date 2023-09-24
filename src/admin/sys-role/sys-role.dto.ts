import { IsNumber } from 'class-validator'
import { ValidatorClassBuilder } from '@/common/dto'
import { SysRole } from '@/entity/sys-role.entity'

export class CreateSysRoleDto extends ValidatorClassBuilder(
  SysRole,
  ['name'],
  ['desc'],
) {
  @IsNumber({}, { each: true })
  permissions?: number[]
}
