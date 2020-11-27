import { Column, Entity } from "typeorm";
import { ORM_DB_SCHEMA } from "../shared/configs/app";
import { Entities } from "../shared/constants/entities";
import { CommonEntity } from "./Common";

@Entity(Entities.Users, { schema: ORM_DB_SCHEMA })
export class UserEntity extends CommonEntity {
  @Column()
  name: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
