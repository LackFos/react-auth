import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import userKeys from ".";
import usePromiseToast from "../../hooks/usePromiseToast";

export const useGetProfile = () => {
  const axiosClient = useAxios();
  const cacheKey = userKeys.profile;

  const query = useQuery({
    queryKey: cacheKey,
    queryFn: () =>
      axiosClient._get("/users/profile", { withCredentials: true }),
  });

  return { ...query, data: query.data?.data.payload };
};

export const useLogin = () => {
  const axiosClient = useAxios();

  const toast = usePromiseToast();

  return useMutation({
    mutationFn: (credentials) => {
      toast.loading("Mencoba login");
      return axiosClient._post("/users/login", credentials, {
        withCredentials: true,
      });
    },
    onSuccess: ({ data }) => {
      toast.update(data.message, "success");
    },
    onError: (error) => {
      toast.update(error.response.data.message, "error");
    },
  });
};
