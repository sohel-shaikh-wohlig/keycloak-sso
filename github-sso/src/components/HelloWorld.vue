<template>
<div class="wrapper">
    <button @click="logout()">logout</button>
    <button @click="refresh()">Refresh Token</button>
    <button @click="git()">git call</button>
    <div class="hello">
      {{data}}
      <!-- <div style="text-align:left">
        Data:
        <div class="box">
          <div>
            client id: {{keycloakData.clientId}}
          </div>
          <div>
            Realm: {{keycloakData.realm}}
          </div>
          <div>
            Roles: {{keycloakData.realmAccess.roles.join(",")}}
          </div>
          <div>
            Token: {{keycloakData.token}}
          </div>
          <div>
            ID Token: {{keycloakData.idToken}}
          </div>
          <div>
            Refresh Token: {{keycloakData.refreshToken}}
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    const keycloakData = JSON.parse(localStorage.getItem("keycloak"))
    const data = ''
    return{
      keycloakData,data
    }
  },
  methods:{
    async git(){
      const res =  await fetch('https://api.github.com/user/repos',{
        headers:{
          Authorization: 'token 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'
        }
      })
      this.data = await res.json()
    },
    async logout(){
      this.$keycloak.logout()
      localStorage.removeItem('keycloak')
    },
    async refresh(){
      const res = await this.$keycloak.updateToken()
      console.log(res)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  padding: 1rem 0;
  float: left;
  padding-left: 2rem;
}
.box{
  padding:1rem 3rem;
  color:white;
  background-color: rgb(24, 23, 23);
  text-align: left;
}
</style>
