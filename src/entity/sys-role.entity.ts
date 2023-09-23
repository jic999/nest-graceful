import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'sys_role' })
export class SysRole {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 30, comment: '角色名称' })
  name: string

  @Column({ type: 'varchar', length: 30, unique: true, comment: '角色标识' })
  code: string

  @Column({ type: 'varchar', length: 255, nullable: true, comment: '角色描述' })
  description: string
}
