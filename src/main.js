import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//  安装less依赖
//  npm install less less-loader --save-dev 解决Error: Can't resolve 'less-loader'
import './styles/index.less'  //全局样式

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
