import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let install = null
function render () {
  install = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

// 使用qiankun更改资源目录
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 如果没使用qiankun直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 子组件协议
export async function bootstrap () { // 启动

}

export async function mount (props) {
  render()
}

export async function unmount (props) {
  install.$destroy()
}


