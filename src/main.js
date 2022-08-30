import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import AntDesign from "ant-design-vue"
import "ant-design-vue/dist/antd.css"
import { createPinia } from "pinia";
const store = createPinia();
createApp(App).use(router).use(store).use(AntDesign).mount("#app");
