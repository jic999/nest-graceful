import { ValidatorClassBuilder } from 'src/common/dto/util'
import { SysUser } from 'src/entity/sys-user.entity'

export class CreateSysUserDto extends ValidatorClassBuilder(
  SysUser,
  ['username'],
  ['nickname', 'email'],
) {}
