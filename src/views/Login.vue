<template>
  <div class="home">
    <div>
      <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <!-- <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img> -->
              <div>
                <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" fade indicators img-width="1024" img-height="480">
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
                </b-carousel>
              </div>
            </b-col>
            <b-col md="6">
              <b-card-body title="Login">
                <b-card-text>
                  <div>
                    <b-form @submit.stop.prevent>
                      <label for="text">Username</label>
                      <b-input v-model="username" type="text" id="text-password"></b-input>
                      <b-form-text id="password-help-block"></b-form-text>
                    </b-form>
                    <b-form @submit.stop.prevent>
                      <label for="text-password">Password</label>
                      <b-input
                        v-model="password"
                        type="password"
                        id="text-password"
                        aria-describedby="password-help-block"
                      ></b-input>
                      <br />
                    </b-form>
                    <form inline>
                      <b-button
                        variant="outline-success"
                        @click="login(username, password)">Iniciar Sesion</b-button>
                      <label for>''</label>
                      <b-button variant="outline-danger" href="/">cancelar</b-button>
                      <br />
                    </form>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login(username, password) {
      const createdAt = new Date();
      console.log(username, password);
       axios.post("http://localhost:3000/api/users/login/", {
        username: username,
        password: password
        })
        .then(function(response) {
          console.log(response);
          if(response.data == 'Wrong password'){
            console.log("No cumple sus credenciales");
          }else{
            console.log("Si cumple sus credenciales");
            console.log(response.data.id);
            console.log(response.data.username);
            this.$router.push({name: "/menu"});
          }
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {});
    }
  }
};
</script>