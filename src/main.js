import { createApp } from "vue";
import App from "~/App.vue";
import router from "~/routes";
import store from "~/store";
import VueUniversalModal from "vue-universal-modal";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-universal-modal/dist/index.css";

createApp(App)
  .use(router)
  .use(store)
  .use(VueUniversalModal, {
    teleportTarget: "#modal",
  })
  .mount("#app");
