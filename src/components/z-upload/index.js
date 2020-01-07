import ZUpload from './src/main';

ZUpload.install = function (Vue) {
  Vue.component(ZUpload.name, ZUpload);
};

export default ZUpload;
