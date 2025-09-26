"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useSignout(){
      const router = useRouter();
     const handleSignout = async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Signed out Successfully");
        },

        onError: () => {
          toast.error("Error signing out. Please try again.");
        },
      },
    });
  };

  return handleSignout
}