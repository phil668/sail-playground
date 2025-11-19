import { createApp } from "vue";
import App from "./App.vue";
import "virtual:uno.css";
import Sail from "@sail/ui";
import "@sail/ui/lib/style.css";
import "@sail/ui/theme/mba/style.css";
// import "@sail/ui/theme/igtb/style.css";
import "@sail/ui/theme/bocpay/style.css";
import { registerSailSdk } from "@sail/use";
import { createSdk } from "@sail/jssdk";
import "./style.css";
// import Vant from "vant";
// import "vant/lib/index.css";

const jssdk = createSdk({
  businessName: "sail",
});

registerSailSdk(jssdk);

createApp(App).use(Sail).mount("#app");
