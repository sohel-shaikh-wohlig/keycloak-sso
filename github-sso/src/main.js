import Vue from 'vue'
import App from './App.vue'
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'Demo',
  clientId: 'demo-client',
  onLoad: 'login-required',
  redirectUri: 'http://localhost:8080/realms/Demo/broker/github/endpoint'
})

keycloak.init({ onLoad: 'login-required' })
  .then((auth) =>{
    
    if(!auth) {
      window.location.reload();
    }

    new Vue({
      render: h => h(App),
    }).$mount('#app')
    Vue.prototype.$keycloak = keycloak

    localStorage.setItem("keycloak", JSON.stringify(keycloak));
    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setInterval(() =>{
      keycloak.updateToken(5).then((refreshed)=>{
        if (refreshed) {
          console.log('Token refreshed'+ refreshed);
        } else {
          console.log('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      })
    }, 5000)
})