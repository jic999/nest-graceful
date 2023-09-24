import { ConflictException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SysUser } from 'src/entity/sys-user.entity'
import { In, Repository } from 'typeorm'
import { AssignRoleDto, CreateSysUserDto } from './sys-user.dto'
import { SysRole } from '@/entity/sys-role.entity'

@Injectable()
export class SysUserService {
  constructor(
    @InjectRepository(SysUser)
    private sysUser: Repository<SysUser>,
    @InjectRepository(SysRole)
    private sysRole: Repository<SysRole>,
  ) {}

  public async create(data: CreateSysUserDto): Promise<SysUser> {
    // Query whether the username exists
    const isExist = await this.sysUser.exist({ where: { username: data.username } })
    if (isExist)
      throw new ConflictException('Username already exists')

    const user = this.sysUser.create(data)
    user.password = '123456'

    return this.sysUser.save(user)
  }

  public async findAll(): Promise<SysUser[]> {
    return this.sysUser.find()
  }

  public async findPermissionNames(id: string) {
    const user = await this.sysUser.findOne({
      where: { id },
      relations: ['roles', 'roles.permissions'],
    })
    const permissions = user.roles.map(role => role.permissions.map(permission => permission.name))
    return Array.from(new Set(permissions.flat()))
  }

  public async assignRole(data: AssignRoleDto) {
    const user = await this.sysUser.findOneBy({ id: data.id })
    if (!user)
      throw new ConflictException('User does not exist')

    const roles = await this.sysRole.findBy({ id: In(data.roleIds) })
    user.roles = roles
    return this.sysUser.save(user)
  }
}
