<template>
  <div class="about-us wrapper"
       :class="{'about-us--bg---night':!$store.state.theme}">

    <div class="content about-us__content">

      <div class="text-wrapper about-us__text-wrapper">

        <div class="before-title about-us__before-title">WELCOME TO clinic</div>

        <div class="title about-us__title"
             :class="$store.getters.theme?'about-us__text--theme--light':'about-us__text--theme--dark'">
          Why you should choose us ?
        </div>

        <div class="text about-us__text"
             :class="$store.getters.theme?'about-us__text--theme--light':'about-us__text--theme--dark'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          Duis aute irure dolor in reprehenderit in voluptate
        </div>

        <button class="btn about-us__btn"
                :class="$store.getters.theme?'about-us__btn--theme--light':'about-us__btn--theme--dark'">
          GET STARTED NOW
        </button>

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

.about-us {
  min-height: 100vh;
  padding-top: 110px;

  &--bg---night {
    background-color: $dark-color;
  }

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
    line-height: 1.666;
    font-size: .64cm;
    width: 90%;
  }

  &__text--theme--light {
    color: $dark-color;
    opacity: .7;
  }

  &__text--theme--dark {
    color: $portfolio-bg;
    opacity: .9;
  }

  &__btn {
    background-color: $blue-color;
    width: 7.056cm;
    margin-top: 80px;
  }

  &__btn--theme--light {
    color: rgb(255, 255, 255);
  }

  &__btn--theme--light:hover {
    background-color: rgb(255, 255, 255);
    color: rgb(107, 194, 241);
    box-shadow: 0 0 10px #949494, 0 0 15px #91d3f6, 0 0 20px #bbe4fa, 0 0 25px #def0fa;
  }

  &__btn--theme--dark {
    color: rgba($dark-color, .8);
    font-weight: bolder;
  }

  &__btn--theme--dark:hover {
    background-color: rgba($dark-color, .8);
    color: rgb(107, 194, 241);
    box-shadow: 0 0 10px #949494, 0 0 19px #91d3f6, 0 0 24px #bbe4fa, 0 0 28px #def0fa;
  }

  &__text-wrapper {
    flex-direction: column;
    gap: 20px;
  }

}
</style>