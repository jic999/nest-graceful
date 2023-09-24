import { IsString, Length } from 'class-validator'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('sys_permission')
export class SysPermission {
  @PrimaryGeneratedColumn()
  @IsString()
  id: string

  @Column({ type: 'varchar', length: 50, unique: true })
  @IsString()
  @Length(1, 50)
  name: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  desc: string

  @CreateDateColumn()
  createdTime: Date

  @UpdateDateColumn()
  updatedTime: Date
}
