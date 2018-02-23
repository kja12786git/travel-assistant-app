// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueApiRequest from 'vue-api-request'

ViewApiRequst.setAPI(api)
Vue.use(VueApiRequest)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// for Auth0 use
/*app.get('/api/authorize', authCheck, (req,res) => {
  let loginAuthorized = [

  ];

  res.json(loginAuthorized);
})

app.listen(3003);
console.log('@ port 3003');
*/
