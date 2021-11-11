<template>
  <div class="footer">
    <div class="footer-wrapper">

      <div class="footer__medical">
        <div class="footer-title">Medical</div>
        <div class="footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d</div>
        <div class="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </div>
      </div>

      <div class="footer__new-york">
        <div class="footer-title">New York</div>
        <div class="footer-text">
          709 Honey Creek Dr. <br>New York<br> NY 10028
        </div>
        <div class="footer-text">
          1-888-299-2000<br>
          yourmail@ompany.com
        </div>
      </div>

      <div class="footer__london">
        <div class="footer-title">London</div>
        <div class="footer-text">
          4851 Willow Greene Drive<br> Montgomery <br>AL 36109
        </div>
        <div class="footer-text">
          1-888-299-2000 <br>
          yourmail@ompany.com
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss">
.footer {
  height: 623px;
  width: 100%;
  background: rgb(7, 37, 53);
  display: flex;
  justify-content: center;
  align-items: center;

  &__medical, &__london, &__new-york {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    gap: 1.41cm;

    .footer-title {
      font-size: 0.635cm;
      font-family: "Roboto";
      color: rgb(255, 255, 255);
      line-height: 1.666;
    }

    .footer-text {
      font-size: 0.494cm;
      font-family: "Roboto";
      color: rgb(255, 255, 255);
      line-height: 2.142;
      opacity: 0.702;
    }
  }

  &__medical {
    flex-basis: 620px
  }

  &__london, &__new-york {
    flex-basis: 226px
  }
}

.footer-wrapper {
  display: flex;
  width: 80%;
  justify-content: space-evenly;
  align-items: flex-start;
}

@media screen and (max-width: 1700px) {
  .footer {
    height: 500px;

    &__medical, &__london, &__new-york {
      gap: 0.901cm;

      .footer-title {
        line-height: 1.066;
      }

      .footer-text {
        line-height: 1.842;
      }
    }

    &__medical {
      flex-basis: 520px
    }

    &__london, &__new-york {
      flex-basis: 186px
    }
  }
}

@media screen and (max-width: 1500px) {
  .footer {
    height: 440px;

    &__medical, &__london, &__new-york {

      .footer-title {
        line-height: 0.966;
      }

      .footer-text {
        line-height: 1.442;
      }
    }
  }
}

@media screen and (max-width: 1330px) {
  .footer-wrapper {
    width: 86%;
    justify-content: space-between;
  }

  .footer {
    height: 326px;

    &__medical, &__london, &__new-york {
      gap: 0.501cm;

      .footer-title {
        font-size: 0.535cm;
        line-height: 0.866;
      }

      .footer-text {
        font-size: 0.414cm;
        line-height: 1.442;
      }
    }
  }
}

@media screen and (max-width: 1130px) {
  .footer-wrapper {
    width: 86%;
    justify-content: space-between;
  }

  .footer {
    height: 320px;

    &__medical {
      flex-basis: 420px
    }

    &__london, &__new-york {
      flex-basis: 170px
    }
  }
}

@media screen and (max-width: 980px) {
  .footer-wrapper {
    width: 90%;
  }

  .footer {
    height: 270px;

    &__medical, &__london, &__new-york {
      gap: 0.301cm;

      .footer-title {
        font-size: 0.495cm;
        line-height: 0.766;
      }

      .footer-text {
        font-size: 0.374cm;
        line-height: 1.242;
      }
    }

    &__medical {
      flex-basis: 390px
    }

    &__london, &__new-york {
      flex-basis: 140px
    }

  }
}

@media screen and (max-width: 790px) {

  .footer {
    height: 220px;

    &__medical, &__london, &__new-york {
      gap: 0.261cm;

      .footer-title {
        font-size: 0.465cm;
        line-height: 0.666;
      }

      .footer-text {
        font-size: 0.294cm;
        line-height: 1.102;
      }
    }

    &__medical {
      flex-basis: 250px
    }

    &__london, &__new-york {
      flex-basis: 80px
    }

  }
}

@media screen and (max-width: 560px) {
  .footer {

    &__medical {
      flex-basis: 180px
    }
  }
}

@media screen and (max-width: 470px) {
  .footer-wrapper {
    width: 90%;
    flex-direction: column;
    gap: 25px;
  }

  .footer {
    height: 370px;
    &__medical,&__london, &__new-york {
      flex-basis: 100%;
      gap: 9px;
    }
  }
}

@media screen and (max-width: 345px) {
  .footer {
    height: 400px;
  }
}

@media screen and (max-width: 265px) {
  .footer {
    height: 430px;
  }
}
</style>