<template>
  <div class="portfolio wrapper">

    <div class="content portfolio__content">

      <div v-for="(img,index) of portfolioImg "
           :key="index"
           class="portfolio-gallery">
        <img class="portfolio-gallery__img"
             :src="require(`../assets/image/${img.title}`)">
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: "Portfolio",
  data() {
    return {
      portfolioImg: [
        {title: 'portfolio1.png'},
        {title: 'portfolio2.png'},
        {title: 'portfolio3.png'},
        {title: 'portfolio4.png'},
        {title: 'portfolio5.png'},
        {title: 'portfolio6.png'},
      ]
    }
  },
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

.portfolio {
  min-height: 100vh;
  padding: 110px 40px;
  background-color: $portfolio-bg;

  &__content{
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 40px;
  }

  &-gallery {
    &__img {
      margin: 10px;
      transform: scale(1, 1);
      transition: .2s linear;
    }

    &__img:hover {
      transform: scale(1.1, 1.1);
    }
  }
}

</style>