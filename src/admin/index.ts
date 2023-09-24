import { AdminBaseModule } from './base/base.module'
import { SysPermissionModule } from './sys-permission/sys-permission.module'
import { SysRoleModule } from './sys-role/sys-role.module'
import { SysUserModule } from './sys-user/sys-user.module'

export const adminModules = [
  AdminBaseModule,
  SysUserModule,
  SysPermissionModule,
  SysRoleModule,
]
