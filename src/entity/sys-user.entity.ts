import { Entity } from 'typeorm'
import { BaseUser } from './base/user-base.entity'

@Entity({ name: 'sys_user' })
export class SysUser extends BaseUser {}
