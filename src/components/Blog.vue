<template>
  <div class="blog wrapper">

    <span class="blog__quotation-marks">“</span>

    <div class="blog__text text">
      This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
      lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh
      vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
      odio. Sed non mauris vitae erat consequat auctor eu in elit.
    </div>



    <div class="slider blog__slider">

      <ion-icon name="chevron-back-outline"></ion-icon>

      <div v-for="(el,index) of sliderEl"
           :key="index"
           class="slider__item blog__slider-item">

        <img class="slider__img blog__slider-img" :src="require(`../assets/image/${el.img}`)">

      </div>

      <ion-icon name="chevron-forward-outline"></ion-icon>

    </div>

  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      sliderEl: [
        {name: 'JANE1 GALADRIEL1', profession: '1', img: 'blog1.png', isActive: false},
        {name: 'JANE2 GALADRIE2L', profession: ' 2', img: 'blog2.png', isActive: false},
        {name: 'JANE GALADRIEL', profession: 'CEO TENGKUREP', img: 'blog3.png', isActive: true},
        {name: 'JANE3 GALADRIEL3', profession: ' 3', img: 'blog4.png', isActive: false},
        {name: 'JANE4 GALADRIEL4', profession: ' 4', img: 'blog5.png', isActive: false},
      ],
      
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.blog {
  flex-direction: column;
  box-sizing: border-box;
  padding: 110px 90px;
  gap: 40px;
  min-height: calc(19 * 37px);
  background-color: $blue-color;

  &__quotation-marks {
    font-size: 120px;
    font-family: "Roboto";
    color: rgb(255, 255, 255);
    opacity: 0.902;
    line-height: 0;
  }

  &__text {
    color: rgb(255, 255, 255);
    line-height: 1.876 !important;
    text-align: center;
    opacity: 0.7;
    width: 55%;
  }

  &__slider{
    margin: 20px;
    gap: 20px;
  }

  &__slider-item {
    img {
      height: 75px;
    }
  }

  &__slider-item:nth-of-type(3) {
    img {
      height: 95px;
    }
  }
}

</style>