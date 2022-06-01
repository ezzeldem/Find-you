<template>
  <h3 class="title"><slot></slot></h3>
</template>

<style lang="scss" scoped>
.title {
  padding: 20px 0;
  font-size: 28px;
  font-weight: 550;
  color: $darckBlueColor;
}

@media (max-width: 992px) {
  .title {
  font-size: 22px;
}
}
@media (max-width: 442px) {
.title {
  font-size: 18px;
}
}
</style>
