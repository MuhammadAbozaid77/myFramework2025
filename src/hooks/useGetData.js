import { useQuery } from "@tanstack/react-query";
import { FunctionGetData } from "../services/apiData";

export default function useGetData() {
  // GetData
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: FunctionGetData,
  });

  return { data, error, isLoading };
}
