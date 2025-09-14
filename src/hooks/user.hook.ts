import { addUser, getAllUser } from "@/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllUser = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });
  return query;
};

export const useAddUser = () => {
  return useMutation<any, Error, any>({
    mutationKey: ["add-user"],
    mutationFn: (user: any) => addUser(user),
  });
};
