import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const apps = [
  {
    name: 'sub-vue', // app name registered
    entry: '//localhost:7100', // fetch解决跨域
    container: '#sub-vue',
    activeRule: '/sub-vue',
  },
  {
    name: 'html',
    entry: '//localhost:7105',
    container: '#subapp-view',
    activeRule: '/html',
  },
  {
    name: 'purehtml',
    entry: '//localhost:7104',
    container: '#subapp-viewport',
    activeRule: '/purehtml',
  },
]

registerMicroApps(apps);

start();
