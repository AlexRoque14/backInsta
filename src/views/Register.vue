
    <template>
  <div class="home">
    <div>
      <div>
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <!-- <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img> -->
              <div>
                <b-carousel
                  id="carousel-fade"
                  style="text-shadow: 0px 0px 2px #000"
                  fade
                  indicators
                  img-width="1024"
                  img-height="480"
                >
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
                  <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
                </b-carousel>
              </div>
            </b-col>
            <b-col md="6">
              <b-card-body title="Formulario de Registro">
                <b-card-text>
                  <div>
                    <b-form @submit.stop.prevent>
                      <label for="text-password">Email</label>
                      <b-input class="chido" v-model="email" type="email" id="text-password"></b-input>
                      <b-form-text id="password-help-block"></b-form-text>
                    </b-form>
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
                      <b-button variant="outline-success" @click="Registrar(username, email, password)">Success</b-button>
                      <label for>''</label>
                      <b-button variant="outline-danger" href="/">cancelar</b-button>
                      <br />
                      <b-form-text
                        id="password-help-block"
                      >Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</b-form-text>
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
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
import axios from "axios";
 var id = '0';
export default {
  name: "app",
  components: {},
  data() {
    return {
      id: "",
      email: "",
      username: "",
      password: ""
    };
  },
  methods: {
    register(email, username, password) {
      const createdAt = new Date();
      console.log(email, username, password);
    },
    getAllRequest() {
      axios
        .get("http://127.0.0.1:3333/api/users/")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {});
    },
    Registrar(username, email, password) {
      console.log(id);
      axios.post("http://127.0.0.1:3333/api/users/", {
          id: id,
          username: username,
          email: email,
          password: password
        })
        .then(function(response) {
          console.log(response);
          console.log("Registrado correctamente");
        })
        .catch(function(error) {
          console.log(error);
          console.log("No se pudo registrar el usuario");
        })
        .then(function() {
          console.log("No se que va aqui :v");
        });
    }
  }
};
</script>