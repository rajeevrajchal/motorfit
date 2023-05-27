import { useQuery } from "@tanstack/react-query";
import { supabase } from "src/constant/supabase";
import { useAuth } from "./context/useAuth";
import { useToast } from "native-base";

const useVehicle = () => {
  const { session } = useAuth();
  const toast = useToast();

  const getAllVehicle = useQuery(
    ["vehicle.all"],
    async () => {
      const { data, error } = await supabase
        .from("vehicle")
        .select()
        .eq("owner", session?.user?.id)
        .eq("delete", false);

      if (error) {
        throw error;
      }

      return data;
    },

    {
      onError: (error: { message: string; code: string }) => {
        toast.show({
          title: error.code,
          description: `${error.code}: ${error?.message}`,
          placement: "top",
        });
      },
    }
  );

  return {
    getAllVehicle,
  };
};
export default useVehicle;
