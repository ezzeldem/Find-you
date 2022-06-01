<template>
  <div class="button_box">
    <slot></slot>
  </div>
  <div class="button_box transparentBox">
    <slot name="transparentBox"></slot>
  </div>
  <div class="button_box blueButton">
    <slot name="blueButton"></slot>
  </div>
</template>

<style lang="scss">
.button_box {
  a {
    display: inline-block;
    padding: 11px 56px;
    background-color: $orangColor;
    border-radius: 100px;
    color: $whiteColor;
    font-weight: 550;
    font-size: 16px;
    border: 1px solid $orangColor;
    @extend%trans_4;
    &:hover {
      background-color: transparent;
      color: $orangColor;
    }
  }
  &.blueButton {
    a {
      background-color: $babyBlueColor;
      border-color: $babyBlueColor;
      &:hover {
        background-color: transparent;
        color: $babyBlueColor;
      }
    }
  }
  &.transparentBox {
    a {
      padding: 16px 70px;
      background-color: transparent;
      color: $darckBlueColor;
      border-color: $darckBlueColor;
      &:hover {
        background-color: $darckBlueColor;
        color: $whiteColor;
      }
    }
  }
}

@media (max-width: 992px) {
  .button_box {
    a {
      font-size: 16px;
      padding: 6px 38px;
    }
    &.transparentBox {
      a {
        font-size: 16px;
        padding: 6px 38px;
      }
    }
  }
}
@media (max-width: 442px) {
  .button_box {
    a {
      font-size: 14px;
      padding: 6px 28px;
    }
    &.transparentBox {
      a {
        font-size: 14px;
        padding: 6px 28px;
      }
    }
  }
}
</style>
