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
    <br />
    <br />
    <div>
      <div>
        <b-card
          title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
          <b-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>