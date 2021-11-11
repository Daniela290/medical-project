<template>
  <div>
    <Navbar/>
    <Header id="home"/>
    <AboutUs id="aboutUs"/>
    <Futures/>
    <Services id="services"/>
    <Portfolio id="portfolio"/>
    <Blog id="futures"/>
    <ContactUs id="contactUs"/>
    <Footer/>
  </div>
</template>

<script>
/*eslint-disable*/
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ContactUs from "@/components/ContactUs";
import AboutUs from "@/components/AboutUs";
import Futures from "@/components/Futures";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";

export default {
  name: 'App',
  components: {Blog, Footer, Services, Portfolio, Futures, AboutUs, ContactUs, Header, Navbar},
}
</script>

<style lang="scss">
@import "assets/styles/index";
</style>
