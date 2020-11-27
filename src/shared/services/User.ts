import { useUserDao } from "../dao/User";

const { getUsers: getUsersDao } = useUserDao();

export const useUserService = () => {
  const getUsers = async () => {
    return await getUsersDao();
  };
  const createUser = () => {};
  const updateUser = () => {};
  const deleteUser = () => {};

  return {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  };
};
