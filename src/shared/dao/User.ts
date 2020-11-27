import { getRepository } from "typeorm";
import { UserEntity } from "../../entities/User";
import { Entities } from "../constants/entities";
import { HttpResponseType, HTTP_RESPONSES } from "../constants/http";

export const useUserDao = () => {
  const getUsers = async () => {
    try {
      const users = await getRepository(UserEntity).createQueryBuilder(Entities.Users).select().getMany();
      return { ...HTTP_RESPONSES[HttpResponseType.Success], records: users };
    } catch (err) {
      console.log("Error getUsers: ", err);
      return HTTP_RESPONSES[HttpResponseType.BadRequest];
    }
  };

  const createUser = async () => {
    try {
      await getRepository(UserEntity)
        .createQueryBuilder(Entities.Users)
        .insert()
        .into(UserEntity)
        .values({ name: "Rod" })
        .execute();
      return { ...HTTP_RESPONSES[HttpResponseType.Created] };
    } catch (err) {
      console.log("Error createUser: ", err);
      return HTTP_RESPONSES[HttpResponseType.BadRequest];
    }
  };

  const updateUser = async () => {
    try {
      await getRepository(UserEntity)
        .createQueryBuilder(Entities.Users)
        .update(UserEntity)
        .set({ name: "Rod Edited" })
        .where("id = :id", { id: 4 })
        .execute();
      return { ...HTTP_RESPONSES[HttpResponseType.Updated] };
    } catch (err) {
      console.log("Error updateUser: ", err);
      return HTTP_RESPONSES[HttpResponseType.BadRequest];
    }
  };

  const deleteUser = async () => {
    try {
      await getRepository(UserEntity).softDelete({ id: 1 });
      return { ...HTTP_RESPONSES[HttpResponseType.Deleted] };
    } catch (err) {
      console.log("Error deleteUser: ", err);
      return HTTP_RESPONSES[HttpResponseType.BadRequest];
    }
  };

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };
};
