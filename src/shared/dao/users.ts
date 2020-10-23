import { UserEntity, UserEntitySchema } from "../entities/users";

export const createUserDao = async () => {};
export const retrieveUserDao = async () => {
  try {
    const data = await UserEntity.query(`SELECT * FROM ${UserEntitySchema}`);
    console.log("data: ", data);
    return data;
  } catch (err) {
    console.log("Error retrieveUserDao: ", err);
    return [];
  }
};
export const updateUserDao = async () => {};
export const deleteUserDao = async () => {};
