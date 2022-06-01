<template>
  <div class="introBox">
    <div class="container">
      <TheContainer>
        <div class="row">
          <div class="col-md-12">
            <div class="introContent">
              <h1 class="introTitle">Be together, Forever.</h1>
              <div class="pragBox">
                <prag>
                  <template #largPrag>
                    I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account.</template
                  ></prag
                >
              </div>
              <ButtonBox>
                <template #transparentBox>
                  <a href="#">Try 30 Days Free</a></template
                ></ButtonBox
              >
              <div class="intro_img">
                <img
                  src="../../assets/img/introImg.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
import ButtonBox from "../../Layout/ButtonBox.vue";
import Prag from "../../Layout/Prag.vue";

import TheContainer from "../../Layout/TheContainer.vue";

export default {
  components: {
    ButtonBox,
    Prag,
    TheContainer,
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
