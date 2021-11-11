<template>
  <div class="about-us wrapper"
       :class="{'about-us-night-bg':$store.state.theme}">

    <div class="content about-us__content">

      <div class="text-wrapper about-us__text-wrapper">

        <div class="before-title about-us__before-title">WELCOME TO clinic</div>

        <div class="title about-us__title">Why you should choose us ?</div>

        <div class="text about-us__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          Duis aute irure dolor in reprehenderit in voluptate
        </div>

        <button class="btn about-us__btn">GET STARTED NOW</button>

      </div>

      <img class="about-us__img" src="../assets/image/about-us-doctor.png">

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutUs"
}
</script>

<style lang="scss">
@import "../assets/styles/variables";
.about-us-night-bg{
  background-color: $dark-color;
}
.about-us {
  min-height: 100vh;
  padding-top: 110px;

  &__content {
    justify-content: space-between;
  }

  &__img {
    height: calc(20 * 37px);
  }

  &__before-title {
    color: $blue-color;
  }

  &__title {
    color: $dark-color;
  }

  &__text {
    color: $dark-color;
    line-height: 1.666;
    font-size: .64cm;
    width: 90%;
    opacity: .7;
  }

  &__btn {
    color: #ffff;
    background-color: $blue-color;
    width: 7.056cm;
    margin-top: 80px;
  }

  &__text-wrapper {
    flex-direction: column;
    gap: 20px;
  }

}
</style>