<template>
  <div class="col-lg-4 col-md-6">
    <div class="bannerBox">
      <div class="icon_box">
        <font-awesome-icon @click="closeMenu" :icon="icon" />
      </div>
      <TitleBox class="titleBOx">{{ title }}</TitleBox>
      <Prag>{{ pragContent }}</Prag>
    </div>
  </div>
</template>

<script>
import Prag from "../../Layout/Prag.vue";
import TitleBox from "@/Layout/TitleBox.vue";
export default {
  props: ["icon", "title", "pragContent", "colorProp"],
  components: {
    Prag,
    TitleBox,
  },
  data() {
    return {
      colorCode: this.colorProp,
    };
  },
};
</script>

<style lang="scss" scoped>
.bannerBox {
  padding: 10px;
  .icon_box {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 92px;
    height: 92px;
    border-radius: 15px;
    position: relative;
    background-size: 0%;
    &::before {
      border-radius: 15px;
      content: "";
      position: absolute;
      top: 9px;
      left: -7px;
      width: inherit;
      height: inherit;
      background-color: v-bind(colorCode);
      z-index: -1;
    }
    &::after {
      border-radius: 15px;
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      border: 1px solid $darckBlueColor;
    }
    svg {
      font-size: 26px;
      color: $darckBlueColor;
    }
    .titleBOx {
      padding: 30px 0;
    }
  }
}

@media (max-width: 772px) {
  .bannerBox {
    .icon_box {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
