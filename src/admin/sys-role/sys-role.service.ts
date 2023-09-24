import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { ConflictException, Injectable } from '@nestjs/common'
import { CreateSysRoleDto } from './sys-role.dto'
import { SysRole } from '@/entity/sys-role.entity'
import { SysPermission } from '@/entity/sys-permission.entity'

@Injectable()
export class SysRoleService {
  constructor(
    @InjectRepository(SysRole)
    private sysRole: Repository<SysRole>,
    @InjectRepository(SysPermission)
    private sysPermission: Repository<SysPermission>,
  ) {}

  public async create(data: CreateSysRoleDto) {
    if (await this.sysRole.exist({ where: { name: data.name } }))
      throw new ConflictException('Role name already exists')
    const { permissions, ...roleInfo } = data
    const role = this.sysRole.create(roleInfo)
    if (permissions) {
      const perms = await this.sysPermission.findBy({ id: In(permissions) })
      role.permissions = perms
    }
    return this.sysRole.save(role)
  }
}
