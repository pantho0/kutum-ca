import { addUser, changeUserStatus, getAllUser } from "@/services/user";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

export const useChangeUserStatus = () => {
  const queryClient = useQueryClient();
  return useMutation<any, Error, string>({
    mutationKey: ["change-user-status"],
    mutationFn: (id: string) => changeUserStatus(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
