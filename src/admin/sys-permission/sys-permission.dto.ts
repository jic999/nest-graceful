import { ValidatorClassBuilder } from '@common/dto'
import { SysPermission } from '@/entity/sys-permission.entity'

export class CreateSysPermissionDto extends ValidatorClassBuilder(
  SysPermission,
  ['name'],
  ['desc'],
) {}
