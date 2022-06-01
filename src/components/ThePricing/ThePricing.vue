<template>
  <div class="pircingBox">
    <div class="container">
      <TheContainer>
        <div class="row">
          <div class="col-md-12">
            <div class="sectionTiti">
              <TitleBox>Pricing Plan</TitleBox>
              <Prag
                >But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system.</Prag
              >
            </div>
          </div>
        </div>
        <div class="row">
          <TheBox
            v-for="list in priceList"
            :key="list.imgSrc"
            :price="list.priceNumber"
            :list="list.list"
            :name="list.name"
            :pragText="list.pragText"
          ></TheBox>
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
import TitleBox from "../../Layout/TitleBox.vue";
import Prag from "../../Layout/Prag.vue";
import TheContainer from "../../Layout/TheContainer.vue";
import TheBox from "./TheBox.vue";

export default {
  components: { TitleBox, Prag, TheContainer, TheBox },
  data() {
    return {
      priceList: [
        {
          name: "Personal",
          priceNumber: "18.35",
          list: [
            "30gb data storage",
            "More than 500+ friend include",
            "group chat avaiable",
            "categories based friend list",
          ],
          pragText: "Try 30 Days Free",
        },
        {
          name: "Business",
          priceNumber: "72.90",
          list: [
            "80gb data storage",
            "More than 1500+ friend include",
            "Group chat avaiable",
            "Categories based friend listS",
          ],
          pragText: "Try 30 Days Free",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
