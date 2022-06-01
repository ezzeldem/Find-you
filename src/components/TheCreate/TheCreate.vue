<template>
  <div class="create_section">
    <div class="container">
      <TheContainer>
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="createBox">
              <title-box>Create Account</title-box>
              <prag>
                We all need to start well must explain to you how all this
                mistaken idea of denouncing pleasure and praising pain was born
                and I will give you a complete account of the system, and
                expound.
              </prag>
              <form>
                <div class="form-group">
                  <input type="text" placeholder="Email Address" />
                  <button>Get Started</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-6 order1">
            <div class="createImgBox">
              <img
                src="../../assets/img/phineImg.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
import TitleBox from "../../Layout/TitleBox.vue";
import Prag from "../../Layout/Prag.vue";
import ButtonBox from "../../Layout/ButtonBox.vue";

import TheContainer from "../../Layout/TheContainer.vue";
export default {
  components: { TitleBox, Prag, ButtonBox, TheContainer },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
