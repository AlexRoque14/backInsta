<template>
  <div>
    <b-navbar type="ligth" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="/menu">Instagram</b-nav-item>
        <b-nav-item href="/img">Nueva</b-nav-item>
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="#">Account</b-dropdown-item>
          <b-dropdown-item href="#">Cerrar Sesion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <div>
      <b-card title="Nueva Fotografía" class="center">
        <br />
        <br />
        <b-form @submit="postImage">
          <b-form-group>
            <input type="file" @change="cargar($event)" />
          </b-form-group>

          <b-form-group id="input-group-3" label-for="input-3">
            <b-form-input
              id="input-3"
              v-model="image.descripcion"
              type="text"
              placeholder="Descripcion de la imagen"
            ></b-form-input>
          </b-form-group>
          <b-button variant="outline-success" id="show-btn" @click="postImage()">Publicar</b-button>
          <label for>''</label>
          <b-button variant="outline-danger" href="/menu">Cancelar</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      image: {
        descripcion: "",
        img: ""
      }
    };
  },
  methods: {
    cargar(event) {
      this.image.img = event.target.files[0];
      console.log(this.image.img);
      console.log(this.image.descripcion);

      // let formData = new FormData();

      // formData.append("description", this.image.descripcion);
      // formData.append("url", this.image.img);
      // alert(JSON.stringify("Hola desde PostImage"));
    },

    postImage() {
      let formData = new FormData();

      formData.append("description", this.image.descripcion);
      formData.append("url", this.image.img);
      alert(JSON.stringify("Hola desde PostImage"));

      axios
        .post("http://127.0.0.1:3333/api/imagen", formData)
        .then(response => {
          console.log(response);
          alert(JSON.stringify(response));
        })
        .catch(error => {
          console.log(error.message);
        });
    }
  }
};
</script>