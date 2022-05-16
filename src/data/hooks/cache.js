import { QueryCache } from "react-query";

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
  onSuccess: (data) => {
    console.log(data);
  },
});

export const useGetQueryCache = (key) => {
  return queryCache.find(key);
};
