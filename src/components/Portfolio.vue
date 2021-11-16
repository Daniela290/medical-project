<template>
  <div class="portfolio wrapper"
       :class="[$store.getters.theme?'portfolio-light-theme':'portfolio-dark-theme',
       (isShowSlider || !isShowGallery)?'portfolio--height--with-slider':'portfolio--height--without-slider']">

    <div class="content portfolio__content"
         v-if="!isShowSlider && isShowGallery">

      <div v-for="(img,index) of portfolioImg "
           :key="index"
           class="portfolio-gallery"
           @click="clickHandler()">
        <img class="portfolio-gallery__img"
             :src="require(`../assets/image/${img.title}`)"
             :class="isShowPortfolioComponent?`portfolio-gallery--img--coming${index+1}`:''">
      </div>

    </div>

    <div class="content portfolio__content"
         v-if="isShowSlider || !isShowGallery">

      <carousel-3d>
        <slide v-for="(img,index) of portfolioImg"
               :key="index"
               :index="index">
          <img
              :src="require(`../assets/image/${img.title}`)">
        </slide>
      </carousel-3d>

      <button class="btn portfolio__btn"
              @click="isShowSlider=false"
              v-if="isShowGallery">
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
      isShowSlider: window.innerWidth <= 600 ? true : false,
      isShowPortfolioComponent: false,
      isShowGallery: window.innerWidth <= 600 ? false : true
    }
  },
  mounted() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: .1
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
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateWidth);
  },
  methods: {
    updateWidth() {
      if (window.innerWidth <= 600) {
        this.isShowGallery = false
      } else this.isShowGallery = true
    },
    clickHandler() {
      this.isShowSlider = true
      this.$scrollTo('#portfolio', 100)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.portfolio {
  padding: 0 30px;

  &--height--with-slider {
    padding: 110px 40px 20px 40px;
    min-height: 500px;
  }

  &--height--without-slider {
    height: auto;
    padding: 80px 10px -10px 10px;
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
      animation: portfolio-img1 1s linear;
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
      animation: portfolio-img2 1s linear;
    }

    @keyframes portfolio-img2 {
      0% {
        opacity: 0;
        transform: translateY(-20px)
      }
      100% {
        opacity: 1;
        transform: translateY(0)
      }
    }

    &--img--coming3 {
      animation: portfolio-img3 1s linear;
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
      animation: portfolio-img4 1s linear;
    }

    @keyframes portfolio-img4 {
      0% {
        opacity: 0;
        transform: translate(-20px, 20px);
      }
      100% {
        opacity: 1;
        transform: translate(0px, 0px);
      }
    }

    &--img--coming5 {
      animation: portfolio-img5 1s linear;
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
      animation: portfolio-img6 1s linear;
    }

    @keyframes portfolio-img6 {
      0% {
        opacity: 0;
        transform: scale(1.1);
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