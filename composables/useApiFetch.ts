import { createFetch } from "@vueuse/core";
import { useAuthStore } from "~/store/auth";
import { useToast } from "vue-toastification";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "../app.vue";

const route = useRoute();
const toast = useToast();
const config = useRuntimeConfig();
const baseUrl = 'https://plankton-app-ikxuv.ondigitalocean.app';
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
const authStore = useAuthStore();

export const useApiFetch = createFetch({
  baseUrl: baseUrl,
  combination: "overwrite",
  options: {
    beforeFetch({ url, options, cancel }) {
      let token = localStorage.getItem("local");
      if (options.method === "POST" || options.method === "PATCH") {
        options.headers = {
          "Content-Type": "application/json",
        };
      }

      options.headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",

        ...options.headers,
      };

      return { options };
    },

    onFetchError(error) {
      let status = error.response?.status;
      let unauthorized = localStorage.getItem("unauthorized") || "false";
      if (status == 400) {
        try {
          let errorData = JSON.parse(error.data);
          if (typeof errorData == "object") {
            toast.error(errorData.errors[0]);
          }
        } catch (e) {
          toast.error(error.data);
        }
      } else if (status == 401 && authStore.L_I) {
        toast.error("Unauthorized");
        authStore.logout();
        const redirectPath =
          "/login?redirect=" + encodeURIComponent(route.path);
        localStorage.setItem("/redirect_path", route.path);
        navigateTo(redirectPath);
      } else if (status == 500) {
        toast.error("Sorry, An error occurred");
      }

      return error;
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});

export const parseDataFromApi = (data: any) => {
  return JSON.parse(data.value || "[]") as unknown as object[];
};
