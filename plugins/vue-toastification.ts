import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Toast, 
     {   
        transition: "Vue-Toastification__fade",
          maxToasts: 20,
          newestOnTop: true,
         timeout: 3000,
         closeOnClick: true,
         pauseOnFocusLoss: true,
         pauseOnHover: true,
         draggable: true,
         draggablePercent: 0.2,
         showCloseButtonOnHover: false,
         hideProgressBar: true,
         closeButton: "button",
         icon: true,
         rtl: false

    }).provide('toast', nuxtApp.vueApp.config.globalProperties.$toast);
})


