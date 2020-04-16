import Vue from "vue";
import Vuex from "vuex";

import createLogger from "vuex/dist/logger";
import * as NotificationModule from "./components/notifications/shared/notification-data";

// const debug = process.env.NODE_ENV !== "production";
const debug = true;

Vue.use(Vuex);

export default new Vuex.Store({
  modules: [NotificationModule],
  strict: debug,
  plugins: debug ? [createLogger()] : [] // set logger only for development
});
