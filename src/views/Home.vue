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
              <b-card-body title="Instagram">
                <b-card-text>
                  Registrate para ver fotos y videos de tus amigos!
                  <div>
                    <b-button
                      href="/register"
                      variant="outline-success"
                      b-button
                      size="lg"
                    >Registrarse</b-button>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card-text>¿Tienes una cuenta? Inicia Sesión!. </b-card-text>
        <b-button href="/login" variant="primary">Iniciar Sesion</b-button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
