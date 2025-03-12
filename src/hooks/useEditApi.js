import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodoFunction } from "../services/apiData";

export default function useEditApi() {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: postTodoFunction,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return { mutate, isPending, error };
}
