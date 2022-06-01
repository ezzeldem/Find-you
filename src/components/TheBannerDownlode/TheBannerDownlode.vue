<template>
  <div class="bannerDownlode_section">
    <div class="container">
      <TheContainer>
        <div class="row align-items-center ">
          <div class="col-md-6">
            <h2 class="introTitle">You can easily record video call</h2>
            <Prag
              >But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth.</Prag
            >
            <div class="down_box">
              <p>Download App Now?</p>
              <div class="linksBox">
                <a href="#"
                  ><img
                    src="../../assets/img/paly.png"
                    alt=""
                    class="img-fluid"
                /></a>
                <a href="#"
                  ><img
                    src="../../assets/img/iphone.png"
                    alt=""
                    class="img-fluid"
                /></a>
              </div>
            </div>
          </div>
          <div class="col-md-6 order1">
            <div class="img-box">
               <img
              src="../../assets/img/Screen.png"
              alt=""
              class="img-fluid phoneImg"
            />
            </div>
          </div>
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
import Prag from "../../Layout/Prag.vue";
export default {
  components: { Prag },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
