<template>
  <div class="header wrapper">

    <div class="content header__content">

      <div class="text-wrapper header__text-wrapper">


        <div class="header__title">

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

        <div class="header__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et
          doloremagna aliqua. Ut enim ad minim veniam,
          quis nostrud
        </div>

        <div class="btn-wrapper">
        <button class="btn header__btn">GET STARTED NOW</button>
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
    color: $footer-bg;
    background-color: #ffff;
    width: 7.056cm;
  }

  &__text {
    width: 70%;
    font-size: 0.635cm;
    font-family: "Roboto";
    color: rgb(255, 255, 255);
    line-height: 1.666;
  }

  &__title {
    span {
      font-family: "Roboto";
      color: rgb(255, 255, 255);
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

@media screen and (max-width: 1850px) {

  .header {
    padding-top: 110px;

    &__text-wrapper {
      gap: 40px;
    }

    &__btn {
      width: 7.056cm;
    }

    &__text {
      width: 70%;
      font-size: 0.605cm;
      line-height: 1.466;
    }

    &__title span:nth-of-type(1),
    &__title span:nth-of-type(2)
    {
      font-size: 1.819cm;
    }

    &__title span:nth-of-type(3) {
      font-size: 0.717cm;
    }

  }

}
</style>