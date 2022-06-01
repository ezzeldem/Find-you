<template>
  <the-header></the-header>
  <the-intro></the-intro>
  <the-banner></the-banner>
  <the-create></the-create>
  <the-invent></the-invent>
  <the-pricing></the-pricing>
  <the-banner-downlode></the-banner-downlode>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheIntro from "./components/TheIntro/TheIntro.vue";
import TheBanner from "./components/TheBanner/TheBanner.vue";
import TheCreate from "./components/TheCreate/TheCreate.vue";
import TheInvent from "./components/TheCreate/TheInvent.vue";
import ThePricing from "./components/ThePricing/ThePricing.vue";
import TheBannerDownlode from "./components/TheBannerDownlode/TheBannerDownlode.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheIntro,
    TheBanner,
    TheCreate,
    TheInvent,
    ThePricing,
    TheBannerDownlode,
    TheFooter
  },
  data() {
    return {
      img1: "phineImg.png",
      img2: "investImg.png",
    };
  },
};
</script>

<style lang="scss">
@import "@/Style/default.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

body {
  font-family: "Poppins", sans-serif;
    scroll-behavior: smooth;
}
</style>
