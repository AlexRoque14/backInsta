import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {firestorePlugin} from 'vuefire';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'firebase/messaging';
import axios from 'axios';

Vue.prototype.$axios = axios

Vue.use(BootstrapVue),
Vue.use(firestorePlugin)

Vue.config.productionTip = false;
const config ={
  apiKey: "AIzaSyCkUyPgR_w9e1blmLqNJqlMD3bMRJKCLn8",
  authDomain: "pwa-insta-a7cb6.firebaseapp.com",
  databaseURL: "https://pwa-insta-a7cb6.firebaseio.com",
  projectId: "pwa-insta-a7cb6",
  storageBucket: "pwa-insta-a7cb6.appspot.com",
  messagingSenderId: "976394341394",
  appId: "1:976394341394:web:739156fee63771c5741ccb"
}

firebase.initializeApp(config);
Vue.config.productionTip = false

export const db = firebase.firestore()

const messaging = firebase.messaging();
messaging.usePublicVapidKey("BLrGj2ATgFRDZVE9kPuuitiRj6yNCJ6xPnLE-38f_7QhYAoY4Gw_KSg6VepaKOrRxtjQT0TwKHnyKS7z3EQ8Yuk");

messaging.requestPermission().then(() =>{
  console.log('notificacion permisos granted.');

  messaging.getToken().then((token)=> {
    console.log(token)
  });

}).catch((err) =>{ 
console.log('error =>',err);
});


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
