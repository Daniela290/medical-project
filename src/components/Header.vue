<template>
  <div class="header wrapper">

    <div class="content header__content">

      <div class="text-wrapper header__text-wrapper">

        <div class="header__title"
             :class="$store.getters.theme?'header__title-light':'header__title-dark'">

          <span>
            The best doctors in
          </span>

          <span>
            Medicine!
          </span>

          <span>
            <br> in the world of modern medicine!
          </span>

        </div>

        <div class="header__text"
             :class="$store.getters.theme?'header__text-light':'header__text-dark'">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          doloremagna aliqua. Ut enim ad minim veniam,
          quis nostrud
        </div>

        <div class="btn-wrapper">
          <button class="btn header__btn"
                  v-scroll-to="{el:'#contactUs', duration:600}"
                  :class="$store.getters.theme?'header__btn--theme--light':'header__btn--theme--dark'">
            GET STARTED NOW
          </button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.header {
  padding-top: 110px;
  min-height: 100vh;
  background-image: url("../assets/image/header-bg.png");
  background-size: cover;
  background-repeat: no-repeat;

  &__content {
    justify-content: flex-start;
  }

  &__text-wrapper {
    flex-direction: column;
    align-items: flex-start;
    gap: 70px;
  }

  &__btn {
    width: 7.056cm;
  }

  &__btn--theme--light {
    color: $footer-bg;
    background-color: rgb(255, 255, 255);
  }

  &__btn--theme--light:hover {
    background-color: rgb(255, 255, 255);
    color: $footer-bg;
    box-shadow: 0 0 10px $footer-bg, 0 0 19px rgba($footer-bg,.7), 0 0 27px rgba($footer-bg,.5), 0 0 38px rgba($blue-color,.7);
  }

  &__btn--theme--dark {
    background-color: rgba($footer-bg, .9);
    color: rgb(255, 255, 255);
  }

  &__btn--theme--dark:hover {
    background-color: rgba($footer-bg, .9);
    color: rgb(255, 255, 255);
    box-shadow: 0 0 10px #949494, 0 0 19px #91d3f6, 0 0 24px #bbe4fa, 0 0 28px #def0fa;
  }

  &__text {
    width: 70%;
    font-size: 0.635cm;
    font-family: "Roboto";
    color: rgb(255, 255, 255);
    line-height: 1.666;
  }

  &__text-light,&__title-light {
    color: rgb(255, 255, 255);
    text-shadow: 0 0 5px rgba($dark-color,.3);
  }

  &__text-dark,&__title-dark {
    color: $dark-color;
    text-shadow: 0 0 5px rgba(#ffff,.7);
  }

  &__title {
    span {
      font-family: "Roboto";
      text-align: left;
    }
  }

  &__title span:nth-of-type(1) {
    font-size: 2.469cm;
  }

  &__title span:nth-of-type(2) {
    font-weight: bold;
    font-size: 2.469cm;
  }

  &__title span:nth-of-type(3) {
    font-size: 0.917cm;
  }

}

</style>