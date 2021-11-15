<template>
  <div class="portfolio wrapper"
       :class="[$store.getters.theme?'portfolio-light-theme':'portfolio-dark-theme',
       isShowSlider?'portfolio--height--with-slider':'portfolio--height--without-slider']">

    <div class="content portfolio__content"
         v-if="!isShowSlider">

      <div v-for="(img,index) of portfolioImg "
           :key="index"
           class="portfolio-gallery"
           @click="isShowSlider=true">
        <img class="portfolio-gallery__img"
             :src="require(`../assets/image/${img.title}`)">
<!--        :class="isShowPortfolioComponent?`portfolio-gallery&#45;&#45;img&#45;&#45;coming${index+1}`:''"-->
      </div>

    </div>

    <div class="content portfolio__content"
         v-if="isShowSlider">

      <carousel-3d>
        <slide v-for="(img,index) of portfolioImg"
               :key="index"
               :index="index">
          <img
              :src="require(`../assets/image/${img.title}`)">
        </slide>
      </carousel-3d>

      <button class="btn portfolio__btn"
              @click="isShowSlider=false">
        Back to gallery
      </button>

    </div>

  </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';
/*eslint-disable*/

export default {
  name: "Portfolio",
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      portfolioImg: [
        {title: 'portfolio1.png'},
        {title: 'portfolio2.png'},
        {title: 'portfolio3.png'},
        {title: 'portfolio4.png'},
        {title: 'portfolio5.png'},
        {title: 'portfolio6.png'},
      ],
      isShowSlider: false,
      isShowPortfolioComponent: false
    }
  },
  mounted() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: .25
    }
    let portfolio = document.getElementById('portfolio')

    let observer = new IntersectionObserver((entries, observe) => {
      entries.forEach(
          entry => {
            if (entry.isIntersecting) {
              this.isShowPortfolioComponent = true
            } else this.isShowPortfolioComponent = false
          })
    }, options)

    observer.observe(portfolio)
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.portfolio {
  padding: 110px 40px 20px 40px;

  &--height--with-slider {
    min-height: 500px;
  }

  &--height--without-slider {
    min-height: 100vh;
  }

  &-dark-theme {
    background-color: rgba(28, 28, 35, .9);
  }

  &-light-theme {
    background-color: $portfolio-bg;
  }

  &__content {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 40px;
  }

  &__content:nth-of-type(2) {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-direction: column;
  }

  &-gallery {
    height: auto;

    &__img {
      margin: 10px;
      transform: scale(1, 1);
      transition: .2s linear;
    }

    &--img--coming1 {
      animation: portfolio-img1 1.5s linear;
      //animation-duration: 1.5s;
      //animation-timing-function: linear;
    }

    @keyframes portfolio-img1 {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    &--img--coming2 {

      animation: portfolio-img2 1.5s linear;
      //animation-name: portfolio-img2;
      //animation-duration: 1.5s;
      //animation-timing-function: cubic-bezier(.1, -.6, .2, 0);
    }

    @keyframes portfolio-img2 {
      0% {
        opacity: 0;
        transform: translateY(-50%)
      }
      100% {
        opacity: 1;
        transform: translateY(0%)
      }
    }

    &--img--coming3 {
      animation: portfolio-img3 1.5s linear;
      //animation-name: portfolio-img3;
      //animation-duration: 1.5s;
      //animation-timing-function: cubic-bezier(.1, -.6, .2, 0);
    }

    @keyframes portfolio-img3 {
      0% {
        opacity: 0;
        transform: rotate(360deg);
      }
      100% {
        opacity: 1;
        transform: rotate(0deg);
      }
    }

    &--img--coming4 {
      animation: portfolio-img4 1.5s linear;
      //animation-name: portfolio-img4;
      //animation-duration: 1.5s;
      //animation-timing-function: cubic-bezier(.1, -.6, .2, 0);
    }

    @keyframes portfolio-img4 {
      0% {
        opacity: 0;
        transform: translate(-100px, 100px);
      }
      100% {
        opacity: 1;
        transform: translate(0px, 0px);
      }
    }

    &--img--coming5 {
      animation: portfolio-img5 1.5s linear;
      //animation-name: portfolio-img5;
      //animation-duration: 1.5s;
      //animation-timing-function: cubic-bezier(.1, -.6, .2, 0);
    }

    @keyframes portfolio-img5 {
      0% {
        opacity: 0;
        transform: scaleX(-1);
      }
      100% {
        opacity: 1;
        transform: scaleX(1);
      }
    }

    &--img--coming6 {
      animation: portfolio-img6 1.5s linear;
      //animation-name: portfolio-img6;
      //animation-duration: 1.5s;
      //animation-timing-function: cubic-bezier(.1, -.6, .2, 0);
    }

    @keyframes portfolio-img6 {
      0% {
        opacity: 0;
        transform: scale(1.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }


    &__img:hover {
      transform: scale(1.1, 1.1);
    }
  }

  &__btn {
    background-color: rgb(107, 194, 241);
    width: 5.056cm;
  }
}

.carousel-3d-slide {
  border: none;
  border-radius: 5px;
}

</style>