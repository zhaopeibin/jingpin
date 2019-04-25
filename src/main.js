// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
Vue.use(router);
import 'vant/lib/index.css';
import moment from 'moment'
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Field } from 'vant';
import { NavBar } from 'vant';
import { Sku } from 'vant';

import { Popup } from 'vant';
import { RadioGroup, Radio } from 'vant';

Vue.use(RadioGroup);
Vue.use(Radio);


Vue.use(Popup);
Vue.use(Sku);
import { Row, Col, Icon, Cell, CellGroup } from 'vant'
import axios from 'axios'
import md5 from 'js-md5';
Vue.prototype.$http = axios
import HttpTool from '@/plugins/http.js'
import qs from 'qs'


import { Area } from 'vant';

Vue.use(Area);
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
import { Toast } from 'vant';

import { Tab, Tabs } from 'vant';
import { AddressList } from 'vant';

Vue.use(AddressList);
// import mui from '../src/lib/mui-master/dist/js/mui.js'
// ue.prototype.$mui = mui  
Vue.use(Tab).use(Tabs);
// Vue.use(mui)
Vue.use(Toast);

Vue.use(HttpTool)
Vue.use(NavBar);
Vue.use(qs);
Vue.use(Field);
// Vue.use(md5);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Search);

Vue.use(Vant);
Vue.filter('fmtDate',function(v){
  return moment(v).format('YYYY-MM-DD')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
