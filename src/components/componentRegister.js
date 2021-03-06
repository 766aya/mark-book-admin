import ZButton from "./z-button/index"
import ZCard from "./z-card/index"
import ZDialog from "./z-dialog/index"
import ZSearchBar from './z-search-bar/index'
import ZControlBar from './z-control-bar/index'
import ZUpload from './z-upload/index'

const components = [
  ZButton,
  ZCard,
  ZDialog,
  ZSearchBar,
  ZControlBar,
  ZUpload
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
  install,
  ZButton,
  ZCard,
  ZDialog,
  ZSearchBar,
  ZControlBar,
  ZUpload
}
