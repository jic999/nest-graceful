import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SysPermission } from '@entity/sys-permission.entity'
import { Repository } from 'typeorm'
import { CreateSysPermissionDto } from './sys-permission.dto'

@Injectable()
export class SysPermissionService {
  constructor(
    @InjectRepository(SysPermission)
    private readonly sysPermission: Repository<SysPermission>,
  ) {}

  public async create(data: CreateSysPermissionDto): Promise<SysPermission> {
    const perm = this.sysPermission.create(data)
    return await this.sysPermission.save(perm)
  }
}
