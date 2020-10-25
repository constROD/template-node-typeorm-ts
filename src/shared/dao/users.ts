import { UserEntity, UserEntitySchema } from "../../entities/Users";

export const createUserDao = async () => {
  try {
    const data = await UserEntity.query(
      `INSERT INTO ${UserEntitySchema} (first_name, last_name, age) VALUES ($1, $2, $3)`,
      ["bossROD", "TV", 21]
    );
    console.log("data: ", data);
    return data;
  } catch (err) {
    console.log("Error createUserDao: ", err);
    return [];
  }
};
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
