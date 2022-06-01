<template>
  <div class="col-lg-6 col-md-6 col-12">
    <div class="pircingBox">
      <div class="mark_box" :class="{ blueP: name === 'Personal', orandP: name === 'Business' }">{{ name }}</div>
      <div class="img_box">
        <img
          v-if="name === 'Personal'"
          src="../../assets/img/ThePricing1.png"
          alt=""
          class="img-fluid"
        />
        <img
          v-else
          src="../../assets/img/ThePricing2.png"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="priceName">
        <strong>${{ price }}</strong>
        <span>/month</span>
      </div>
      <ul class="list-unstyled priceList">
        <li v-for="listItem in list" :key="listItem">{{ listItem }}</li>
      </ul>
      <div class="button_box">
        <ButtonBox v-if="name === 'Personal'">
          <template #blueButton> <a href="#">Sign Up!</a> </template></ButtonBox
        >
        <ButtonBox v-else> <a href="#">Sign Up!</a></ButtonBox>
        <p :class="{ blueP: name === 'Personal', orandP: name === 'Business' }">
          {{ pragText }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBox from "../../Layout/ButtonBox.vue";
export default {
  components: { ButtonBox },

  props: ["price", "list", "name", "pragText"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
