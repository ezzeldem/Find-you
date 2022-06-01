<template>
  <p class="prag">
    <slot></slot>
  </p>
  <p class="prag largPrag">
    <slot name="largPrag"></slot>
  </p>
</template>

<style lang="scss">
.prag {
  color: $grayColor;
  font-size: 16px;
  font-weight: 500;
  line-height: 32px;
  &.largPrag {
    font-size: 20px;
    line-height: 36px;
  }
}

@media (max-width: 992px) {
  .prag {
    &.largPrag {
      font-size: 16px;
    }
  }
}
@media (max-width: 772px) {
  .prag {
     
      font-size: 14px;
    
  }
}
</style>
