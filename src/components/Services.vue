<template>
  <div class="services wrapper"
       :class="$store.getters.theme?'services-light-theme':'services-dark-theme'">

    <div class="content services__content">

      <div v-for="(type,index) of serviceTypes "
           :key="index"
           class="services-type"
           :class="$store.getters.theme?'services-type-light-theme':'services-type-dark-theme'">

        <img class="services-type__img" :src="require(`../assets/image/${type.logo}`)">

        <div class="services-type__title"
             :class="$store.getters.theme?'services-text-light-theme':'services-text-dark-theme'">{{ type.title }}
        </div>

        <div class="services-type__text text"
             :class="$store.getters.theme?'services-text-light-theme':'services-text-dark-theme'">{{ type.text }}
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      serviceTypes: [
        {
          title: 'Modern Medicines',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiosmod people',
          logo: 'services1.png'
        },
        {
          title: 'Perfect Personal',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiosmod people',
          logo: 'services2.png'
        },
        {
          title: 'Health Prevention',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiosmod people',
          logo: 'services3.png'
        },
        {
          title: 'First Medical Aid',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiosmod people',
          logo: 'services4.png'
        },
        {
          title: 'Biological Analysis',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiosmod people',
          logo: 'services5.png'
        },
        {
          title: 'Private Doctor',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiosmod people',
          logo: 'services6.png'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.services {
  min-height: 100vh;
  padding: 110px 40px;

  &-light-theme {
    background: none;
  }

  &-dark-theme {
    background-color: $dark-color;
  }

  &-text-light-theme {
    color: $dark-color;
  }

  &-text-dark-theme {
    color: $portfolio-bg;
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 68px;
    box-sizing: border-box;
  }

  &-type {
    box-sizing: border-box;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    max-width: 410px;
    height: 390px;
    border: none;
    border-radius: 20px;
    transition: .3s linear;

    &__img {
      height: 70px;
      margin: 20px 10px 10px 10px;
      transition: .3s linear;
    }

    &__title {
      font-size: 0.635cm;
      font-family: "Roboto";
      text-align: center;
      font-weight: 600;
      transition: .3s linear;
    }

    &__text {
      line-height: 1.876 !important;
      text-align: center;
      opacity: 0.702;
      transition: .3s linear;
    }
  }

  &-type-light-theme:hover {
    box-shadow: 10px 10px 30px rgba($form-color, .7), 0 0 10px rgba($form-color, .4);
  }

  &-type-dark-theme:hover {
    box-shadow: 10px 10px 30px rgba($portfolio-bg, .7), 0 0 10px rgba($portfolio-bg, .4);
  }

  &-type:hover &-type__img {
    height: 80px;
  }

  &-type:hover &-type__title {
    font-size: 0.685cm;
  }

  &-type:hover &-type__text {
    font-size: 0.554cm;
  }
}
</style>