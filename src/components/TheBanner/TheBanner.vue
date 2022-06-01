<template>
  <div class="banner_section">
    <div class="mark_box">Core Feature</div>
    <div class="container">
      <TheContainer>
        <div class="row">
          <BannerBox
            v-for="box in boxes"
            :key="box.title"
            :icon="box.icon"
            :title="box.title"
            :pragContent="box.prag"
            :colorProp="box.color"
          ></BannerBox>
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";

import TheContainer from "../../Layout/TheContainer.vue";
import {
  faFolder,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
library.add(faFolder, faMessage, faPhone);
import BannerBox from "./BannerBox.vue";

export default {
  components: {
    BannerBox,
    TheContainer,
  },
  data() {
    return {
      boxes: [
        {
          icon: faMessage,
          title: "Message System",
          prag: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born a complete account.",
          color: "#ef7f65",
        },
        {
          icon: faPhone,
          title: "Voice Call",
          prag: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born a complete account.",
          color: "#B1EA8C",
        },
        {
          icon: faFolder,
          title: "File Share",
          prag: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born a complete account.",
          color: "#FFE35A",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
