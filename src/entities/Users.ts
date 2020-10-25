import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ORM_DB_SCHEMA } from "../shared/configs/app";
import { generateSchemaEntityName } from "../shared/utils/entities";

export const UserEntitySchema = generateSchemaEntityName(
  ORM_DB_SCHEMA,
  "Users"
);

@Entity("Users", { schema: ORM_DB_SCHEMA })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("varchar", { length: 300, nullable: true })
  first_name: string;

  @Column("varchar", { length: 300, nullable: true })
  last_name: string;

  @Column("integer", { nullable: true })
  age: number;

  @CreateDateColumn({ default: () => "NOW()" })
  created_at: Date;

  @UpdateDateColumn({ default: () => "NOW()" })
  updated_at: Date;
}
