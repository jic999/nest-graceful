import { ValidationClassBuilder } from 'src/common/dto/util'
import { SysUser } from 'src/entity/sys-user.entity'

export class CreateSysUserDto extends ValidationClassBuilder(
  SysUser,
  ['username'],
  ['nickname', 'email'],
) {}
