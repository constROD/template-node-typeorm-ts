import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ nullable: true })
  created_by: number;
  @Column({ nullable: true })
  updated_by: number;
  @Column({ nullable: true })
  deleted_by: number;

  @CreateDateColumn({ name: "created_at" }) "created_at": Date;
  @UpdateDateColumn({ name: "updated_at" }) "updated_at": Date;
  @DeleteDateColumn({ name: "deleted_at" }) "deleted_at"?: Date;
}
