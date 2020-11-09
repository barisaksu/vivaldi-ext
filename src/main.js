import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import("@/assets/css/app.css");

Vue.config.productionTip = false;
Vue.config.keyCodes.r = 82;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
