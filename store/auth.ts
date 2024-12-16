import { defineStore, skipHydrate } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const useAuthStore = defineStore("auth", () => {
  // states
  const L_I = useLocalStorage("L_I", false);
  const local = useLocalStorage("local", "");

  // actions
  const login = (token: string) => {
    L_I.value = true;
    local.value = token;
  };

  const logout = () => {
    L_I.value = false;
    let redirectUrl = localStorage.getItem("redirect_path") || "";
    localStorage.clear();
    localStorage.setItem("redirect_path", redirectUrl);
  };

  return {
    L_I: skipHydrate(L_I),
    local: skipHydrate(local),

    // user: skipHydrate(user),

    login,
    logout,
  };
});
