import { UserEntity, UserEntitySchema } from "../../entities/User";

export const useUserDao = () => {
  const createUser = async () => {
    try {
      const data = await UserEntity.query(
        `INSERT INTO ${UserEntitySchema} (first_name, last_name, age) VALUES ($1, $2, $3)`,
        ["firstROD", "lastROD", 24]
      );
      console.log("data: ", data);
      return data;
    } catch (err) {
      console.log("Error createUserDao: ", err);
      return [];
    }
  };

  const getUsers = async () => {
    try {
      const data = await UserEntity.query(`SELECT * FROM ${UserEntitySchema}`);
      console.log("data: ", data);
      return data;
    } catch (err) {
      console.log("Error retrieveUserDao: ", err);
      return [];
    }
  };

  const updateUser = async () => {};

  const deleteUser = async () => {};

  return {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
  };
};
