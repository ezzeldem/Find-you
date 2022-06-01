<template>
  <header class="header_section">
    <div class="container">
      <TheContainer>
        <div class="row align-items-center">
          <div class="col-md-4 col-4">
            <a href="#">
              <img src="../../assets/img/logo.png" alt="logo" class="img-fluid"
            /></a>
          </div>
          <div class="col-md-8 col-8">
            <div class="overlay" @click="closeMenu" v-if="opnemenuState"></div>
            <div class="nav_box">
              <div class="menu_box" :class="{ opne_menu: opnemenuState }">
                <div class="menu_icon">
                  <font-awesome-icon @click="closeMenu" icon="xmark" />
                </div>
                <ul class="list-unstyled">
                  <li v-for="menuItme in menuLinks" :key="menuItme.name">
                    <a href="#"> {{ menuItme.name }}</a>
                  </li>
                </ul>
              </div>
              <div class="menu_icon">
                <font-awesome-icon icon="bars" @click="openMenu" />
              </div>
              <ButtonBox> <a href="#">Get Start</a></ButtonBox>
            </div>
          </div>
        </div>
      </TheContainer>
    </div>
  </header>
</template>

<script>
import ButtonBox from "../../Layout/ButtonBox.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import TheContainer from "../../Layout/TheContainer.vue";
library.add(faBars, faXmark);

export default {
  components: {
    ButtonBox,
    TheContainer,
  },
  data() {
    return {
      opnemenuState: false,
      menuLinks: [
        { name: "Feature" },
        { name: "How it Work" },
        { name: "Pricing" },
      ],
    };
  },
  methods: {
    openMenu() {
      this.opnemenuState = true;
    },
    closeMenu() {
      this.opnemenuState = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
