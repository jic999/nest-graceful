import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'sys_user' })
export class SysUser {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'varchar', length: 30, unique: true })
  username: string

  @Column({ type: 'varchar', length: 30, nullable: true })
  nickname: string

  @Column({ type: 'varchar', length: 100, select: false })
  password: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  email: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string

  @Column({ type: 'tinyint', default: 0, comment: '状态，0正常，1禁用' })
  status: number

  @Column({ type: 'varchar', length: 30, nullable: true, comment: '盐' })
  salt: string

  @DeleteDateColumn()
  deleteAt: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date
}
