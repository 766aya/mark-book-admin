import ZButton from "./z-button/index"
import ZCard from "./z-card/index"
import ZDialog from "./z-dialog/index"
import ZSearchBar from './z-search-bar/index'
import ZControlBar from './z-control-bar/index'

const components = [
  ZButton,
  ZCard,
  ZDialog,
  ZSearchBar,
  ZControlBar
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  ZButton,
  ZCard,
  ZDialog,
  ZSearchBar,
  ZControlBar
}
