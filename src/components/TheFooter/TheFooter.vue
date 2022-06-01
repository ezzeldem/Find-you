<template>
  <div class="footerBox">
    <div class="container">
      <TheContainer>
        <div class="row">
          <div class="col-md-4 col-12">
            <a href="#">
              <img src="../../assets/img/logo.png" alt="logo" class="img-fluid"
            /></a>
          </div>
          <div
            class="col-md-4 col-6"
            v-for="footList in footer_links"
            :key="footList.name"
          >
            <div class="footer_box_list">
              <h3>{{ footList.name }}</h3>
              <ul class="list-unstyled">
                <li v-for="footListItem in footList.list" :key="footListItem">
                  <a href="#">{{ footListItem }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TheContainer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer_links: [
        {
          name: "Quick Link",
          list: [
            "Feature",
            "Terms & Condition",
            "User Feedback",
            "Online Payment",
          ],
        },
        {
          name: "How It Work?",
          list: [
            "Create Account",
            "Make Plan",
            "Select Date",
            "Online Payment",
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
