import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import userKeys from ".";

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

  return useMutation({
    mutationFn: (credentials) =>
      axiosClient._post("/users/login", credentials, { withCredentials: true }),
  });
};
