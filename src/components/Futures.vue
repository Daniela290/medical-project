<template>
  <div class="wrapper futures">

    <div class="futures-row">

      <div class="futures-img">
        <span class="futures__title-span">learn more about</span>
      </div>

      <div class="futures-info">

        <div class="before-title futures__before-title">features</div>

        <div class="title futures__title">Professional surgeons</div>

        <div class="text futures__text">
          em ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu
        </div>

      </div>

    </div>

    <div class="futures-row">

      <div class="futures-info">

        <div class="before-title futures__before-title">features</div>

        <div class="title futures__title">Emergency care for children</div>

        <div class="text futures__text">
          em ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu
        </div>

      </div>

      <div class="futures-img">
        <span class="futures__title-span">learn more about</span>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Futures"
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.futures {
  height: 100vh;
  display: flex;
  flex-direction: column;

  &-row {
    height: 50%;
    display: flex;
  }

  &-info, &-img {
    width: 50%;
    box-sizing: border-box;
  }

  &-img:nth-of-type(1) {
    background-image: url("../assets/image/future-operating-table.jpg");
  }

  &-img:nth-of-type(2) {
    background-image: url("../assets/image/future-children.jpg");
  }

  &-img {
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    span {
      width: 100%;
      height: 100%;
      background: rgba($blue-color, .6);
      //background: linear-gradient(45deg,rgba($blue-color,.8),rgba($blue-color,.8)),url("../assets/image/future-operating-table.jpg");
      position: absolute;
      opacity: 0;
      transform: scale(0,0);
      transition: .4s linear;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-img:hover span{
    opacity: 1;
    transform: scale(1,1);
  }

  &-info {
    background: rgba($blue-color, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  &__title, &__text, &__before-title {
    color: rgb(255, 255, 255);
    text-align: center;
  }

  &__title{
    font-weight: 600 !important;
  }

  &__text{
    width: 60%;
  }

  &__title-span {
    font-size: 0.917cm;
    font-family: "Roboto";
    color: rgb(255, 255, 255);
    text-transform: uppercase;
    line-height: 1.154;
    text-align: center;
  }

}
</style>