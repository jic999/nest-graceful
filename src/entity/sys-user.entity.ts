import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Exclude, Type } from 'class-transformer'
import { IsEmail, IsIn, IsInt, IsNotEmpty, IsString, Length } from 'class-validator'

@Entity({ name: 'sys_user' })
export class SysUser {
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  id: string

  @Column({ type: 'varchar', length: 30, unique: true })
  @IsString()
  @Length(5, 30)
  username: string

  @Column({ type: 'varchar', length: 30, nullable: true })
  @IsString()
  @Length(1, 30)
  nickname: string

  @Column({ type: 'varchar', length: 100 })
  @IsString()
  @Length(6, 30)
  password: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  @IsEmail()
  email: string

  @Column({ type: 'varchar', length: 255, nullable: true })
  @IsString()
  @IsNotEmpty()
  avatar: string

  @Column({ type: 'varchar', length: 30, nullable: true, comment: '盐' })
  @Exclude()
  salt: string

  @Column({ type: 'tinyint', default: 0, comment: '状态，0正常，1禁用' })
  @IsIn([0, 1])
  status: number

  @DeleteDateColumn()
  deleteAt: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date
}
