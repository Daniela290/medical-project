<template>
  <div class="navbar wrapper"
       :class="$store.getters.theme?'navbar-light':'navbar-dark'">

    <div class="content navbar__content">

      <div class="text-wrapper">

        <div class="logo">
          <span class="logo__first-letter">M</span>
          <span :class="$store.getters.theme?'logo__other-letters-light':'logo__other-letters-dark'">EDICAL</span>
        </div>

        <div class="navigation">
          <div v-for="(el,index) of navigationEL"
               :key="index"
               class="text"
               :class="!$store.getters.theme?'navbar__text-light':'navbar__text-dark'"
               @click="clickHandler(index)"
               v-scroll-to="{ el: `${el.el}`, duration: 500, x: false, y: true}">
            {{ el.tittle }}
            <span
                :class="[{'navbar_text_underline-light':el.isActive&& !$store.getters.theme},{'navbar_text_underline-dark':el.isActive&& $store.getters.theme}]"></span>
          </div>
        </div>

      </div>

      <div class="btn-wrapper">
        <button class="btn navbar__btn"
                :class="$store.getters.theme?'navbar__btn-light':'navbar__btn-dark'">
          GET STARTED
        </button>
      </div>

    </div>

    <div class="navbar-menu">
      <div v-for="(el,index) of navigationEL"
           :key="index"
           class="navbar-menu__el"
           :class="$store.getters.theme?'navbar-menu__el-light':'navbar-menu__el-dark'"
           @click="clickHandler(index)"
           v-scroll-to="{ el: `${el.el}`, duration: 500, x: false, y: true}">

        <ion-icon class="navbar-menu__icon" :md=el.iconName></ion-icon>

        <span class="text navbar-menu__text"
              :class="$store.getters.theme?'navbar-menu__text-light':'navbar-menu__text-dark'">
          {{ el.tittle }}
        </span>
      </div>
    </div>

    <div class="tumbler-theme">

      <div class="toggle-button-cover">
        <div class="button-cover">
          <div class="button r" id="button-1">
            <input type="checkbox" class="checkbox" @change="$store.dispatch('setChangeToTheme')">
            <div class="knobs">
              <ion-icon :name="$store.getters.theme?'sunny':'moon'"></ion-icon>
            </div>
            <div class="layer"></div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Navbar",
  data() {
    return {
      navigationEL: [{tittle: 'Home', isActive: true, el: '#home', iconName: "home-outline"},
        {tittle: 'About us', isActive: false, el: '#aboutUs', iconName: "information-circle-outline"},
        {tittle: 'Services', isActive: false, el: '#services', iconName: "clipboard-outline"},
        {tittle: 'Portfolio', isActive: false, el: '#portfolio', iconName: "images-outline"},
        {tittle: 'Blog', isActive: false, el: '#futures', iconName: "chatbubble-outline"},
        {tittle: 'Contacts', isActive: false, el: '#contactUs', iconName: "call-outline"}],
    }
  },
  methods: {
    clickHandler(index) {
      this.navigationEL.forEach(el => el.isActive = false)
      this.navigationEL[index].isActive = true
    }
  },
  mounted() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: .25
    }

    let home = document.getElementById('home')
    let aboutUs = document.getElementById('aboutUs')
    let services = document.getElementById('services')
    let portfolio = document.getElementById('portfolio')
    let futures = document.getElementById('futures')
    let contactUs = document.getElementById('contactUs')

    let observer = new IntersectionObserver((entries, observe) => {
      entries.forEach(
          entry => {
            if (entry.isIntersecting) {
              //console.log(entry.target)
              this.navigationEL.forEach((el) => {
                if (el.el === '#' + entry.target.id) el.isActive = true
                else el.isActive = false
              })
            }
          })
    }, options)

    observer.observe(home)
    observer.observe(aboutUs)
    observer.observe(services)
    observer.observe(portfolio)
    observer.observe(futures)
    observer.observe(contactUs)
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.navbar-dark {
  background: rgba($portfolio-bg, .5);
}

.navbar-light {
  background: rgba($dark-color, .4);
}

.navbar {
  height: 106px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  &__text-light {
    color: $dark-color;
    position: relative;
    cursor: pointer;
  }

  &__text-dark {
    color: $portfolio-bg;
    position: relative;
    cursor: pointer;
  }

  &__text-light:hover:before,
  &__text-dark:hover:before {
    //transform: scaleX(1);
    width: 100%;
    opacity: .7;
    left: 0;
  }

  .navbar_text_underline-light {
    width: 100%;
    transform: scaleX(1);
    left: 0;
    position: absolute;
    opacity: .7;
    height: 2px;
    bottom: 0;
    background-color: $dark-color;
    transition: .3s linear;
  }

  .navbar_text_underline-dark {
    width: 100%;
    transform: scaleX(1);
    left: 0;
    position: absolute;
    opacity: .7;
    height: 2px;
    bottom: 0;
    background-color: $portfolio-bg;
    transition: .3s linear;
  }

  &__text-light::before {
    content: '';
    position: absolute;
    // transform: scaleX(0);
    height: 2px;
    bottom: 0;
    opacity: .3;
    // width: 100%;
    width: 0;
    right: 0;
    background-color: $dark-color;
    transition: .3s linear;
  }

  &__text-dark::before {
    content: '';
    position: absolute;
    // transform: scaleX(0);
    height: 2px;
    bottom: 0;
    opacity: .3;
    // width: 100%;
    width: 0;
    right: 0;
    background-color: $portfolio-bg;
    transition: .3s linear;
  }

  &__btn {
    background-color: $blue-color;
    width: 4.939cm;
  }

  &__btn-light {
    color: rgb(255, 255, 255);
  }

  &__btn-dark {
    color: rgba($dark-color, .8);
    font-weight: bolder;
  }

  &__content {
    justify-content: space-between;
  }
}

.navigation {
  display: flex;
  align-items: center;
  gap: 38px;
}

.logo {
  font-size: 0.847cm;
  font-family: "Roboto";
  font-weight: bold;
  line-height: 1.249;

  &__first-letter {
    color: $blue-color;
  }

  &__other-letters-dark {
    color: $dark-color;
  }

  &__other-letters-light {
    color: $portfolio-bg;
  }
}

</style>