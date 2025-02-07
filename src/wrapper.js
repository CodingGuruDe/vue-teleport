// Taken from https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html
// Import vue component
import component from './Teleport.vue';

// Declare install function executed by Vue.use()
export function install (Vue) {
  if (install.installed) return;

  install.installed = true;
  Vue.component('Teleport', component);
}

// Create module definition for Vue.use()
const plugin = {
  install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;

if (typeof window !== 'undefined') {
  // eslint-disable-next-line no-undef
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  // eslint-disable-next-line no-undef
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default component;
