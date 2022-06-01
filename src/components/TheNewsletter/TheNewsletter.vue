<template>
  <div class="newsletter_section">
    <div class="container">
      <TheContainer>
        <div class="row">
          <div class="col-md-12">
            <div class="newsletterBox">
              <div class="textBOx">
                <TitleBox>Subscribe Newsletter for Keep Updated</TitleBox>
                <Prag
                  >But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I complete
                  account of the system, and expound the actual teachings.</Prag
                >
              </div>
              <ButtonBox><template #blueButton><a href="#"> Subscribe </a></template></ButtonBox>
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
